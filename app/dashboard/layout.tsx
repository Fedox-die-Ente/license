import React from 'react'
import Link from "next/link";
import Sidebar from "@/components/shared/Sidebar";
import {getLabelFromRoute} from "@/constants";
import PageHeader from "@/components/shared/PageHeader";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";

const Layout = ({children}: {
    children: React.ReactNode
}) => {


    return (
        <div className="grid min-h-screen max-h-[90%] w-full grid-cols-[240px_1fr] overflow-auto">
            <div className="flex flex-col bg-gray-100 dark:bg-dark-150 border-r">
                <div className="flex h-16 items-center justify-between border-b px-4">
                    <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                        {/*<PaperPlaneIcon />*/}
                        <div className={'flex flex-col'}>
                            <span className="text-lg font-spaceGrotesk">Fedustria<span
                                className={'text-primary-500'}>License</span></span>
                            <p className={'text-sm text-dark-150 dark:text-gray-300 '}>Made with 💖</p>
                        </div>
                    </Link>
                    <ThemeSwitcher/>
                </div>

                <div className="flex-1 overflow-auto">
                    <Sidebar/>
                </div>
            </div>
            <div className="flex flex-col">
                <PageHeader/>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
)
}
export default Layout
