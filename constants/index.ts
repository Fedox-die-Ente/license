import {SidebarLink} from "@/types";

export const licenseKeyPrefix = "FDS-"

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: "/assets/icons/home.svg",
        route: "/dashboard/overview",
        label: "Overview",
    },
    {
        imgURL: "/assets/icons/cog.svg",
        route: "/dashboard/manage",
        label: "Manage Licenses",
    },
    {
        imgURL: "/assets/icons/add.svg",
        route: "/dashboard/add",
        label: "Add License",
    }
]

export function getLabelFromRoute(route: string): string {
    const sidebarLink = sidebarLinks.find((link) => link.route === route);
    return sidebarLink?.label || "Unknown";
}