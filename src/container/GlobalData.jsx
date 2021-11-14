import React from "react"
import Navbar from "../components/Navbar"
import {  } from "../context/IndonesiaContext"
import { CountriesContextProvider } from "../context/CountriesContext"
import CountriesDataTable from "../components/CountriesDataTable"
import SortAndSearchCountries from "../components/SortAndSearchCountries"

const GlobalData = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <CountriesContextProvider>
                <SortAndSearchCountries></SortAndSearchCountries>
            </CountriesContextProvider>
            <CountriesContextProvider>
                <CountriesDataTable></CountriesDataTable>
            </CountriesContextProvider>
        </React.Fragment>
    )
}

export default GlobalData