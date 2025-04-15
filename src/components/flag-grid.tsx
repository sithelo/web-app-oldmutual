'use client'

import React, { useEffect, useState } from 'react'
import FlagCard from './flag-card';
import { getAll } from '@/use-cases/countries';

import { useShallow } from 'zustand/react/shallow';
import qs from 'query-string';

import EmptyFilter from "@/components/empty-filter";
import { useCountryStore} from "@/hooks/use-country-store";

export default function FlagGrid() {
    const [loading, setLoading] = useState(true);

    const data = useCountryStore(useShallow(state => ({
        countries: state.countries
    })))

    const setData = useCountryStore(state => state.setData);

    const url = qs.stringifyUrl({ url: '/api/v1/countries' });

    useEffect(() => {
        getAll(url).then(data => {
            setData(data);
            setLoading(false);
        })
    }, [url, setData])

    if (loading) return <h3>Loading...</h3>

    return (
        <>
            {data.countries.length === 0 ? (
                <EmptyFilter showReset />
            ) : (
                <>
                    <div className='grid grid-cols-4 gap-6'>
                        {data.countries.map(country => (
                            <FlagCard key={country.name} country={country} />
                        ))}
                    </div>

                </>
            )}
        </>
    )
}
