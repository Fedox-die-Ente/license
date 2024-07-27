import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ActivityIcon, GalleryHorizontalEndIcon, GitGraphIcon, LineChart, NewspaperIcon, UsersIcon} from "lucide-react";
import CustomInfobox from "@/components/shared/CustomInfoBox";
import LicenseChart from "@/components/shared/LicenseChart";
import {invalidChartConfig, invalidChartData, successChartConfig, successChartData} from "@/lib/fake-data";

const OverviewTab = () => {
    return (
        <div className="grid gap-6 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CustomInfobox params={{
                    title: "Registered Licenses",
                    description: "The total number of registered licenses.",
                    icon: <NewspaperIcon className="h-5 w-5"/>,
                    content: <div className="text-4xl font-bold">12,345</div>
                }}/>

                <CustomInfobox params={{
                    title: "Active Licenses",
                    description: "The number of licenses who have been active.",
                    icon: <ActivityIcon className="h-5 w-5"/>,
                    content: <div className="text-4xl font-bold">8,765</div>
                }}/>

                <CustomInfobox params={{
                    title: "Inactive Licenses",
                    description: "The number of licenses who have been inactive.",
                    icon: <GalleryHorizontalEndIcon className="h-5 w-5"/>,
                    content: <div className="text-4xl font-bold">219</div>
                }}/>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">

                <LicenseChart

                    title={'Valid License Requests'}
                    description={'A graph that shows the valid license requests.'}
                    charData={successChartData}
                    chartConfig={successChartConfig}

                />

                <LicenseChart

                    title={'Invalid License Requests'}
                    description={'A graph that shows the invalid license requests.'}
                    charData={invalidChartData}
                    chartConfig={invalidChartConfig}

                />
            </div>
        </div>
    )
}
export default OverviewTab