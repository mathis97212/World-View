export interface ICountry {
    name: {
        common: string
        official: string
        nativeName: string
    }
    flags: string
    ccn3: Number
    tld: string
    capital: string
    region: string
    subregion: string
    latlng: Number
    population: Number
    independant: boolean
    unMember: boolean
    searchData: any
  }


export interface ICountryCurrencies {
    name: string
    symbol: string
}

export interface ICountryLanguagues {
    language: string
}

