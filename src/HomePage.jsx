import { useState } from "react"
import Navbar from "./Navbar"
import PomodoroTimer from "./PomodoroTimer"

export default function HomePage(){

    let [customTime, setCustomTime] = useState({hrs:0,min:25,sec:0});
    let [customBreakTime, setCustomBreakTime] = useState({breakHrs:0,breakMin:5,breakSec:0});

    return(
        <>
            <Navbar setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime} ></Navbar>
            <PomodoroTimer customTime={customTime} customBreakTime={customBreakTime}></PomodoroTimer>
        </>
    )
}