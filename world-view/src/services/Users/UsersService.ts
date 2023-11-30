import { api } from "../ServiceHelper";

export const fetchCountryData = async() => {
    return await api.get("v3.1/all").then((response) => response.data)
}

export const fetchOneCountryData = async() => {
    return await api.get(`v3.1/${ccn3}`).then((response) => response.data)
}

