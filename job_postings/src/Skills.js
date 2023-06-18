import React,{useState,useEffect} from "react"
import {useRef} from "react"
export default function Skill({skills,filter_setter,filter_tags})
{

    const [clicked,setClickState]=React.useState(false)


    
    //   end of the body of this function

    const appendTag=()=>{
        
        filter_tags(skills)
    }

    const changeState=()=>{
        setClickState((prevState)=>prevState=true)
        
        filter_setter()
        appendTag()
       
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