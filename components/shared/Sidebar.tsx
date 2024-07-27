"use client";
import React from 'react'
import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    const pathName = usePathname();

    return (
        <section>
            <nav className="grid gap-1 px-3 py-6">
                {sidebarLinks.map((item) => {

                    const isActive =
                        (pathName.includes(item.route) && item.route.length > 1) ||
                        pathName === item.route;

                    return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className={`${
                                isActive
                                    ? "primary-gradient rounded-lg text-light-900"
                                    : " text-dark300_light900 "
                            } flex items-center justify-start gap-4 bg-transparent p-4 `}
                        >
                            <Image
                                className={`${isActive ? "" : "invert-colors"}`}
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                            />
                            <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}
export default Sidebar
