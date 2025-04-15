import { Country } from "@/types"
import { create } from "zustand"

type State = {
    countries: Country[]
}

type Actions = {
    setData: (data: Country[]) => void
  //  setCurrentPrice: (auctionId: string, amount: number) => void
}

const initialState: State = {
    countries: []
}

export const useCountryStore = create<State & Actions>((set) => ({
    ...initialState,

    setData: (data: Country[]) => {
        set(() => ({
            countries: data
        }))
    },

    // setCurrentPrice: (auctionId: string, amount: number) => {
    //     set((state) => ({
    //         auctions: state.auctions.map((auction) => auction.id === auctionId
    //             ? {...auction, currentHighBid: amount} : auction)
    //     }))
    // }
}))