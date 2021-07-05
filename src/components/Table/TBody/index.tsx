import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {useTypedSelector} from "../../../redux/store";
import {setOnFilteredCountries} from "../../../redux/actions";
import {Modal} from "react-responsive-modal";
import death from "../../../assets/img/Vector-1.png";
import confimed from "../../../assets/img/Vector-2.png";
import recovered from "../../../assets/img/Vector.png";
import {CountriesTBody} from "../index";

export function TBody(countries: CountriesTBody) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const selectedCountry = useTypedSelector(state => state.summary.selectedCountry)

    return <tbody>
    {countries.Countries
        .sort((a, b) => {
            if (countries.sortedCountry) {
                return countries.sortType === "Country" && a.Country > b.Country ? 1 : -1
            } else {
                return countries.sortType === "Country" && a.Country > b.Country ? -1 : 1
            }
        })
        .sort((a, b) => {
            if (countries.sortedTotal) {
                return countries.sortType === "Total" && a.TotalConfirmed > b.TotalConfirmed ? 1 : -1
            } else {
                return countries.sortType === "Total" && a.TotalConfirmed > b.TotalConfirmed ? -1 : 1
            }
        })
        .filter((val) => {
            return countries.searchedValue === "" || val.Country.toLowerCase().includes(countries.searchedValue.toLowerCase());
        })
        .map((country, index) => {
            return <>
                <tr onClick={onOpenModal}>
                    <td>{index + 1}</td>
                    <td onClick={() => dispatch(setOnFilteredCountries(country.Country))}>{country.Country}</td>
                    <td>{country.TotalConfirmed}</td>
                </tr>
            </>
        })}
    {countries.Countries.filter(value => value.Country === selectedCountry).map(country => {
        return <>
            <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2 className="modal-country">{country.Country}</h2>
                    <div className="modal-block">
                        <img src={death} alt="death"/>
                        <p className="modal-confirmed">Total deaths: </p>
                        <p className="modal-statistic">{country.TotalDeaths}</p>
                    </div>
                    <div className="modal-block">
                        <img src={confimed} alt="death"/>
                        <p className="modal-confirmed">Total confirmed: </p>
                        <p className="modal-statistic">{country.TotalConfirmed}</p>
                    </div>
                    <div className="modal-block">
                        <img src={recovered} alt="death"/>
                        <p className="modal-confirmed">Total recovered: </p>
                        <p className="modal-statistic">{country.TotalRecovered}</p>
                    </div>
                </Modal>
            </div>
        </>
    })}

    </tbody>;
}
