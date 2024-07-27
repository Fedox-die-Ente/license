import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import {EditIcon, XIcon} from "lucide-react";
import {TrashIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Separator} from "@/components/ui/separator";
const ManageLicense = ( { license } : any) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'outline'}>
                    <EditIcon className={'h-5 w-5'}/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>License Details</DialogTitle>
                    <DialogDescription>Review the details of your plugin license.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="plugin-name" className="text-right">
                            Item Name
                        </Label>
                        <Input id="plugin-name" readOnly={true} value={license.item_name} className="col-span-3" />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="plugin-description" className="text-right">
                            Item Description
                        </Label>
                        <Textarea id="plugin-description" readOnly={true} value={license.item_desc} className="col-span-3" />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="client-name" className="text-right">
                            Client Name
                        </Label>
                        <Input id="client-name" readOnly={true} value={license.client_name} className="col-span-3" />
                    </div>
                </div>
                <Separator />
                <div className="py-4">
                    <h3 className="mb-4 font-medium">Registered IPs</h3>
                    <div className="grid gap-2">
                        {license.plugin_lastips.map((ip: string) => (
                            <div key={ip} className="flex items-center justify-between bg-gray-100 dark:bg-dark-150 px-4 py-2 rounded">
                                <div>{ip}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="destructive">Disable License</Button>
                    <Button type="submit">Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default ManageLicense
