import {useDispatch} from "react-redux";
import {setSortType} from "../../../redux/actions";
import React from "react";

export function THeader(props: {
    setSortedTotal: (sortedTotal: boolean) => void,
    setSortCountry: (sortedCountry: boolean) => void,
    sortedCountry: boolean,
    sortedTotal: boolean,
}) {
    const dispatch = useDispatch()
    const onCountryClickHandler = () => {
        props.setSortCountry(!props.sortedCountry)
        dispatch(setSortType("Country"))
    };

    const onTotalConfirmedClickHandler = () => {
        props.setSortedTotal(!props.sortedTotal)
        return dispatch(setSortType("Total"))
    };

    return <thead className="table-header">
    <tr>
        <th>№</th>
        <th onClick={onCountryClickHandler}>Country</th>
        <th onClick={onTotalConfirmedClickHandler}>Total Confirmed</th>
    </tr>
    </thead>;
}
