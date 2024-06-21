import React,{useEffect, useRef, useState} from "react";
import Digit from "./Digit";

//create your first component
const Home = () => {

    const [contador, setContador] = useState(0)
    const intervalId = useRef(null)
    
    useEffect(()=>{
        intervalId.current=setInterval(()=>{
            setContador(contador => contador+1)
        },100)
    },[])

    const stopButton =()=>{
        clearInterval(intervalId.current);
    }

    const startButton=()=>{
        clearInterval(intervalId.current);
        intervalId.current=setInterval(()=>{
            setContador(contador => contador+1)
        },100)
    }

    const resetButton =()=>{
        setContador(contador=>contador=0);
    }

    return (
        <div>
            <div className="d-flex flex-row justify-content-center align-item-center m-5 bg-black">
                <Digit numero={<span className="fa fa-clock"></span>}/>
                <Digit numero={Math.floor(contador/864000)}unidad={"Days"}/>
                <Digit numero={Math.floor(contador/36000)%24} unidad={"Hours"}/>
                <Digit numero={Math.floor(contador/600)%60} unidad={"Min"}/>
                <Digit numero={Math.floor(contador/10)%60} unidad={"S"}/>
                <Digit numero={Math.floor(contador)%10} unidad={"dS"}/>
            </div>
            <div className="d-flex flex-row justify-content-center align-item-center">
                <button onClick={startButton}className="btn btn-success btn-lg p-5 fs-1 m-4">Start</button>
                <button onClick={stopButton} className="btn btn-danger btn-lg p-5 fs-1 m-4">Stop</button>
                <button onClick={resetButton}className="btn btn-secondary btn-lg p-5 fs-1 m-4">Reset</button>
            </div>
        </div>
    );
};

export default Home;
