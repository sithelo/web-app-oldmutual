import React from 'react'
import FlagImage from './flag-image';
import { Flag } from '@/types';
import Link from 'next/link';

type Props = {
    auction: Flag;
}

export default function FlagCard({ auction }: Props) {
    return (
        <Link href={`/auctions/details/${auction.id}`} className='group'>
            <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
                <FlagImage imageUrl={auction.imageUrl} />
                <div className='absolute bottom-2 left-2'>

                </div>
                <div className='absolute top-2 right-2'>

                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
                <p className='font-semibold text-sm'>{auction.year}</p>
            </div>

        </Link>
    )
}