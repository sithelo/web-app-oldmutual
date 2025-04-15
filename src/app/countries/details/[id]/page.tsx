
import Heading from '@/components/heading';
import React from 'react'
import FlagImage from "@/components/flag-image";
import Population from "@/components/population";
import {getDetailedViewData} from "@/use-cases/countries";
import {CountryInfo} from "@/types";

export default async function Details({ params }: { params: { name: string } }) {
    const data: CountryInfo = await getDetailedViewData(params.name);

    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Heading title={`${data.name} ${data.countryDetails.capital}`} />

                </div>

                <div className='flex gap-3'>
                    <h3 className='text-2xl font-semibold'>Population:</h3>
                    <Population population={data.countryDetails.population} />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-6 mt-3'>
                <div className='w-full bg-gray-200 relative aspect-[4/3] rounded-lg overflow-hidden'>
                    <FlagImage imageUrl={data.flag} />
                </div>


            </div>


        </div>
    )
}
