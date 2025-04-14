'use client'

import React, { useEffect, useState } from 'react'
import FlagCard from './flag-card';
import AppPagination from '@/components/pagination';
import { getAll } from '@/use-cases/countries';

import { useParamsStore } from '@/hooks/use-params-store';
import { useShallow } from 'zustand/react/shallow';
import qs from 'query-string';

import EmptyFilter from "@/components/empty-filter";
import {useAuctionStore} from "@/hooks/use-country-store";

export default function FlagGrid() {
    const [loading, setLoading] = useState(true);
    const params = useParamsStore(useShallow(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm,
        orderBy: state.orderBy,
        filterBy: state.filterBy,
        seller: state.seller,
        winner: state.winner
    })));
    const data = useAuctionStore(useShallow(state => ({
        auctions: state.auctions,
        totalCount: state.totalCount,
        pageCount: state.pageCount
    })))
    const setData = useAuctionStore(state => state.setData);
    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({ url: '', query: params });

    function setPageNumber(pageNumber: number) {
        setParams({ pageNumber })
    }

    useEffect(() => {
        getAll(url).then(data => {
            setData(data);
            setLoading(false);
        })
    }, [url, setData])

    if (loading) return <h3>Loading...</h3>

    return (
        <>
            {data.totalCount === 0 ? (
                <EmptyFilter showReset />
            ) : (
                <>
                    <div className='grid grid-cols-4 gap-6'>
                        {data.auctions.map(auction => (
                            <FlagCard key={auction.id} auction={auction} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-4'>
                        <AppPagination pageChanged={setPageNumber}
                                       currentPage={params.pageNumber} pageCount={data.pageCount} />
                    </div>
                </>
            )}
        </>
    )
}
