import {ChartConfig} from "@/components/ui/chart";
import {generateLicenseKey} from "@/lib/utils";

export const successChartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]
export const successChartConfig = {
    desktop: {
        label: "Valid Requests",
        color: "#25eb5d",
    },
} satisfies ChartConfig

export const invalidChartData = [
    { month: "January", desktop: 85 },
    { month: "February", desktop: 102 },
    { month: "March", desktop: 67 },
    { month: "April", desktop: 123 },
    { month: "May", desktop: 94 },
    { month: "June", desktop: 88 },
]

export const invalidChartConfig = {
    desktop: {
        label: "Invalid Requests",
        color: "#eb2525",
    },
} satisfies ChartConfig

export const licenses = [
    {
        key: generateLicenseKey(),
        ips: 5,
        expiration: "2023-12-31",
        status: "Active",
        last_request: "2023-12-31",
        item_name: "WorldEdit",
        item_desc: "A plugin that allows you to edit the world.",
        client_name: "John Doe",
        plugin_lastips: ['192.168.0.1', '10.0.0.2', '172.16.0.3']
    },
    {
        key: generateLicenseKey(),
        ips: 10,
        expiration: "2024-06-30",
        status: "Active",
        last_request: "2024-06-10",
        item_name: "EssentialsX",
        item_desc: "Provides essential commands for your server.",
        client_name: "Jane Smith",
        plugin_lastips: ['192.168.1.1', '10.0.1.2', '172.16.1.3', '192.168.1.4', '10.0.1.5']
    },
    {
        key: generateLicenseKey(),
        ips: 3,
        expiration: "2024-03-31",
        status: "Expired",
        last_request: "2024-03-30",
        item_name: "Dynmap",
        item_desc: "Real-time web-based maps for Minecraft servers.",
        client_name: "Bob Johnson",
        plugin_lastips: ['192.168.2.1', '10.0.2.2']
    },
    {
        key: generateLicenseKey(),
        ips: 8,
        expiration: "2024-01-15",
        status: "Active",
        last_request: "2024-01-10",
        item_name: "Vault",
        item_desc: "Provides a unified API for other plugins.",
        client_name: "Alice Brown",
        plugin_lastips: ['192.168.3.1', '10.0.3.2', '172.16.3.3', '192.168.3.4']
    },
    {
        key: generateLicenseKey(),
        ips: 6,
        expiration: "2024-11-30",
        status: "Active",
        last_request: "2024-11-25",
        item_name: "LuckPerms",
        item_desc: "An advanced permissions management system.",
        client_name: "Charlie Davis",
        plugin_lastips: ['192.168.4.1', '10.0.4.2', '172.16.4.3', '192.168.4.4', '10.0.4.5']
    }
];
