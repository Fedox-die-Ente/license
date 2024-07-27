'use client';
import React from 'react'
import {cn, generateLicenseKey} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Heading1, HelpCircle, NewspaperIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Separator} from "@/components/ui/separator";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {PlusIcon} from "@radix-ui/react-icons";
import {Checkbox} from "@/components/ui/checkbox";

const AddLicense = () => {

    const generateLicense = () => {
        const licenseKey = generateLicenseKey()
        const licenseField = document.getElementById('license-field') as HTMLInputElement
        licenseField.value = licenseKey
    }

    const onExpirationChange = (e: any) => {
        const type = e
        const expirationField = document.getElementById('expiration-field') as HTMLInputElement
        if (type === 'never') {
            expirationField.disabled = true
            expirationField.value = ''
        } else {
            expirationField.disabled = false
        }
    }

    const availableExpiringOptions = [
        {label: 'Days', value: 'days'},
        {label: 'Weeks', value: 'weeks'},
        {label: 'Months', value: 'months'},
        {label: 'Years', value: 'years'}
    ]

    const additionalInformationFields = [
        {id: "item_name", start: "Item Name", placeholder: "WorldEdit"},
        {id: "item_desc", start: "Item Desc" , placeholder: "A plugin that allows you to edit the world."},
        {id: "client_name", start: "Client Name", placeholder: "John Doe"},
    ]

    const test = <Heading1>test</Heading1>

    return (
        <div className="p-6 md:p-8">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div
                            className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-dark-200 border">
                            <NewspaperIcon className="h-5 w-5"/>

                        </div>

                        <div className={'flex flex-col'}>
                            <CardTitle className={'h2-bold'}>Add a new license</CardTitle>
                            <CardDescription>Create a new license for a project.</CardDescription>
                        </div>

                    </div>
                </CardHeader>
                <CardContent className={'flex flex-col gap-10'}>
                    <div className="grid gap-1">
                        <p className={'text-lg'}>License Key</p>
                        <div className={'flex flex-row gap-2 items-center'}>
                            <Input id={'license-field'} placeholder={'my-strong-licensekey'}/>
                            <Button onClick={generateLicense}>Generate</Button>
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className={'text-lg'}>IP Settings</p>
                        <span className={'text-sm text-gray-400'}>How many different IPs can access the key at the same time?</span>
                        <Input id={'ip-field'} placeholder={'1'} type={'number'}/>
                    </div>
                    <div className="grid gap-1">
                        <p className={'text-lg'}>Expiration Date</p>
                        <span className={'text-sm text-gray-400'}>When should the license expire?</span>
                        <div className={'flex flex-row gap-2 items-center'}>
                            <Input id={'expiration-field'} disabled type={'number'}/>
                            <Select onValueChange={onExpirationChange} defaultValue={'never'}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a fruit"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Available Options</SelectLabel>
                                        {availableExpiringOptions.map(option => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                        <Separator/>
                                        <SelectItem key={'never'} value={'never'}>
                                            Never
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className={'text-lg'}>Additional information</p>
                        <span className={'text-sm text-gray-400'}>Add additional information to the license.</span>

                        {additionalInformationFields.map(field => (
                            <div className={'py-1'}>
                                <Input
                                    key={field.id}
                                    placeholder={field.placeholder}
                                    startAdornment={
                                        <div
                                            className={'max-w-32 text-center border-r text-sm pl-0 py-2 min-w-32 text-white'}>
                                            {field.start}
                                        </div>
                                    }/>
                            </div>
                        ))}

                        <div className="flex items-center space-x-2 pt-3">
                            <Checkbox id="terms"/>
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                License works only for items with this name.
                            </label>
                        </div>
                    </div>
                    <div className="grid gap-1 items-center justify-end">
                        <Button variant='outline' className={'w-full'}>Create new</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default AddLicense
