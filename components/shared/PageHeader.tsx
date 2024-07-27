'use client';
import React from 'react'
import {getLabelFromRoute} from "@/constants";
import {usePathname} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {SignedIn, UserButton} from "@clerk/nextjs";
const PageHeader = () => {

    const pathName = usePathname();

    return (
        <header className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-4">
                <h1>{getLabelFromRoute(pathName)}</h1>
            </div>
            <div className="flex items-center gap-4">
                {/*<SupportDialog/>*/}
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "h-10 w-10",
                            },
                            variables: {
                                colorPrimary: "#006fff",
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </header>
    )
}
export default PageHeader
