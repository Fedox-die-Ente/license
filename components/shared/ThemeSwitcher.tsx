'use client';

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";

const ThemeSwitcher = () => {

    const {theme, setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">

                    {theme === "dark" ? (
                        <MoonIcon className="h-5 w-5"/>
                    ) : <SunIcon className="h-5 w-5"/>}

                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <SunIcon className="mr-2 h-4 w-4"/>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonIcon className="mr-2 h-4 w-4"/>
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default ThemeSwitcher
