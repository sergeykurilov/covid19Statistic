import {ISummaryDataType} from "../../api";
import {ActionTypes} from "../constants";


export const getSummary = (summary: ISummaryDataType) => ({
    type: ActionTypes.GET_SUMMARY, payload: summary
} as const)

export const setFilteredCountries = (filteredCountries: any ) => ({
    type: ActionTypes.SEARCH_COUNTRIES, payload: {filteredCountries}
} as const)

export const setSortType = (sortType: string ) => ({
    type: ActionTypes.SORT_TYPE, payload: sortType
} as const)

export const setOnFilteredCountries = (selectedCountry: string ) => ({
    type: ActionTypes.SELECTED_COUNTRY, payload: selectedCountry
} as const)
