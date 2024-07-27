import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const CustomInfobox = ({ params } : any) => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div
                        className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 md:w-12 dark:bg-dark-200 border">
                        {params.icon}
                    </div>

                    <div className={'flex flex-col'}>
                        <CardTitle>{params.title}</CardTitle>
                        <CardDescription>{params.description}</CardDescription>
                    </div>
                </div>

            </CardHeader>
            <CardContent>
                {params.content}
            </CardContent>
        </Card>
    )
}
export default CustomInfobox
