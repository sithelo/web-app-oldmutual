import React from 'react'
import FlagImage from './flag-image';
import { Country } from '@/types';
import Link from 'next/link';

type Props = {
    country: Country;
}

export default function FlagCard({ country }: Props) {
    const flagcdn = `https://flagcdn.com/${country.flag}.svg`.toLowerCase();
    return (
        <Link href={`/countries/details/${country.name}`} className='group'>
            <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
                <FlagImage imageUrl={flagcdn} />

            </div>
            <div className='flex justify-between items-center mt-4'>
                {/*<h3 className='text-gray-700'>{country.name}</h3>*/}
                <p className='font-semibold text-sm'>{country.name}</p>
            </div>

        </Link>
    )
}