import { api } from "../ServiceHelper";

export const fetchCountryData = async() => {
    return await api.get("v3.1/all").then((response) => response.data)
}

export const fetchOneCountryData = async(code: string) => {
    return await api.get(`v3.1/alpha/${code}`).then((response) => response.data)
}

