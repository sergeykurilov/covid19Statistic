import {Covid19API, ISummaryDataType} from "../../api"
import {getSummary} from "../actions";
import {AxiosResponse} from "axios";
import {ActionsType} from "../reducers";
import {Dispatch} from "redux";


export const getSummaryTC = () => (dispatch: Dispatch<ActionsType>) => {
    // dispatch(loadingAction(false))
    return Covid19API.getAllSummary()
        .then((res:AxiosResponse<ISummaryDataType>) => {
            dispatch(getSummary(res.data))
        })
        .catch((err) => {
            console.error(err)
        })
}

