import {getSummary, setFilteredCountries, setOnFilteredCountries, setSortType} from "../actions";
import {ActionTypes} from "../constants";

const initialState = {
    "filteredCountries": "",
    "selectedCountry": "",
    "sortType": "",
    "loading": false,
    "Global": {
        "NewConfirmed": 100282,
        "TotalConfirmed": 1162857,
        "NewDeaths": 5658,
        "TotalDeaths": 63263,
        "NewRecovered": 15405,
        "TotalRecovered": 230845
    },
    "Countries": [
        {
            "Country": "ALA Aland Islands",
            "CountryCode": "AX",
            "Slug": "ala-aland-islands",
            "NewConfirmed": 0,
            "TotalConfirmed": 0,
            "NewDeaths": 0,
            "TotalDeaths": 0,
            "NewRecovered": 0,
            "TotalRecovered": 0,
            "Date": "2020-04-05T06:37:00Z"
        },
    ],
    "Date": "2020-04-05T06:37:00Z"
}




export default function summaryReducer(state = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case ActionTypes.GET_SUMMARY:
            return {
                ...state,
                ...action.payload
            }
        case ActionTypes.SEARCH_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload.filteredCountries
            }
        case ActionTypes.SORT_TYPE:
            return {
                ...state,
                sortType: action.payload
            }
        case ActionTypes.SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }
        default:
            return state
    }
}


export type ActionsType = GetActionSymmaryType | SearchType | SortType | FilteredType
export type GetActionSymmaryType = ReturnType<typeof getSummary>
export type SearchType = ReturnType<typeof setFilteredCountries>
export type FilteredType = ReturnType<typeof setOnFilteredCountries>
export type SortType = ReturnType<typeof setSortType>
export type InitialStateType = typeof initialState
