import React,{useState,useEffect} from "react"
import {useRef} from "react"
export default function Skill({skills,filter_setter,entire_model,ultimate_filterer})
{
    const [clicked,setClickState]=React.useState(false)

    
    //   end of the body of this function
    useEffect(()=>{
        console.log(entire_model)
    },[clicked])


    const changeState=()=>{
        setClickState((prevState)=>prevState=true)
        
        filter_setter()
        // ultimate_filterer()
        
    }
    if(clicked==true){
        
    }
    
    return (
        <>
        <div className="tag"
        onClick={changeState}>
            {skills}</div>
        </>
    )
}