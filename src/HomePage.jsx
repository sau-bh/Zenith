import { useState } from "react"
import Navbar from "./Navbar"
import PomodoroTimer from "./PomodoroTimer"

export default function HomePage(){

    let [customTime, setCustomTime] = useState({hrs:0,min:25,sec:0});

    return(
        <>
            <Navbar setCustomTime={setCustomTime}></Navbar>
            <PomodoroTimer customTime={customTime}></PomodoroTimer>
        </>
    )
}