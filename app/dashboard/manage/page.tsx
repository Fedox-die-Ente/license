import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {GearIcon} from "@radix-ui/react-icons";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {EditIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {licenses} from "@/lib/fake-data";
import Spoiler from "@/components/shared/Spoiler";
import ManageLicense from "@/components/shared/dialog/ManageLicenseDialog";
const ManageLicenses = () => {
    return (
        <div className="p-6 md:p-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div
                            className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-dark-200 border">
                            <GearIcon className="h-5 w-5"/>

                        </div>

                        <div className={'flex flex-col'}>
                            <CardTitle className={'h2-bold'}>Manage licenses</CardTitle>
                            <CardDescription>Manage all licenses from your projects.</CardDescription>
                        </div>

                    </div>
                </CardHeader>
                <CardContent className={'flex flex-col gap-10'}>
                    <Table>
                        <TableCaption>A list of all your registered licenses.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Key</TableHead>
                                <TableHead>IPs</TableHead>
                                <TableHead>Expiration date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last request</TableHead>
                                <TableHead className={'text-right'}>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {licenses.map((license) => (
                                <TableRow key={license.key}>
                                    <TableCell><Spoiler text={license.key}/></TableCell>
                                    <TableCell>{license.ips}</TableCell>
                                    <TableCell>{license.expiration}</TableCell>
                                    <TableCell>{license.status}</TableCell>
                                    <TableCell>{license.last_request}</TableCell>
                                    <TableCell className={'text-right'}>
                                        <ManageLicense license={license}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
export default ManageLicenses
