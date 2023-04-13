import React, {useEffect} from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Coding&nbsp;</span>
                <span>Compiling&nbsp;</span>
                <span>Running</span>
            </div>
        </div>
    )
}

export default PreLoader