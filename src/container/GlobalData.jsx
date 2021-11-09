import React, { useContext } from "react"
import CardCase from "../components/CardCase"
import Navbar from "../components/Navbar"
import {  } from "../context/IndonesiaContext"

const GlobalData = () => {

    const data = useContext()

    return (
        <React.Fragment>
            <Navbar/>
            <CardCase props={data}/>
        </React.Fragment>
    )
}

export default GlobalData