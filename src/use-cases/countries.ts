'use server';

import { httpWrapper } from '@/data-access/http-wrapper';
import {Country, PagedResult} from '@/types';

export async function getAll(query: string): Promise<PagedResult<Country>> {
    return await httpWrapper.get(`search${query}`)
}

export async function getDetailedViewData(id: string): Promise<Country> {
    return await httpWrapper.get(`auctions/${id}`)
}