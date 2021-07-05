import axios from "axios";

export const instance = axios.create({
    // withCredentials: true,
    baseURL: "https://api.covid19api.com/",
});


export const Covid19API = {
    getAllSummary() {
        return instance.get<ISummaryDataType>(`summary`)
    }
};

export interface ICountriesType {
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string
}

export interface IGlobalType {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    "NewRecovered": number,
    TotalRecovered: number,
}

export interface ISummaryDataType {
    Countries: ICountriesType[],
    Date: string,
    Global: IGlobalType,
    ID: string,
    Message: string
}
