import React, {useEffect, useState} from 'react';
import "./index.scss"
import {useDispatch} from "react-redux";
import {getSummaryTC} from "../../redux/thunk";
import {useTypedSelector} from "../../redux/store";
import 'react-responsive-modal/styles.css';
import {THeader} from "./THeader";
import {TBody} from "./TBody";


export interface CountriesTBody {
    sortedCountry: boolean,
    sortedTotal: boolean,
    sortType: string
    searchedValue: string
    Countries: {
        Country: string;
        CountryCode: string;
        Slug: string;
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
        Date: string;
    }[],
    Date: string,
    Global: {
        NewConfirmed: number,
        TotalConfirmed: number,
        NewDeaths: number,
        TotalDeaths: number,
        NewRecovered: number
    }
    ID?: string,
    Message?: string,
}


export const Table = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSummaryTC())
    }, [dispatch])
    const countries = useTypedSelector(state => state.summary.Countries)
    const Date = useTypedSelector(state => state.summary.Date)
    const Global = useTypedSelector(state => state.summary.Global)
    let searchedValue = useTypedSelector(state => state.summary.filteredCountries)
    let sortType = useTypedSelector(state => state.summary.sortType)
    const [sortedTotal, setSortedTotal] = useState<boolean>(false)
    const [sortedCountry, setSortCountry] = useState<boolean>(false)

    return (
        <div className="container">

            <table width="100%" cellPadding="1000" className="table">
                <col width="80"/>
                <col width="800"/>
                <THeader setSortCountry={setSortCountry} setSortedTotal={setSortedTotal} sortedTotal={sortedTotal}
                         sortedCountry={sortedCountry}/>
                <TBody
                    Countries={countries} sortedTotal={sortedTotal} sortedCountry={sortedCountry} Date={Date}
                    Global={Global} searchedValue={searchedValue}
                    sortType={sortType}/>
            </table>
        </div>
    );
};


