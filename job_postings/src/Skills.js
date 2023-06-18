import React,{useState,useEffect} from "react"
import {useRef} from "react"
export default function Skill({skills,filter_setter,filter_tags})
{

    const [clicked,setClickState]=React.useState(false)
    const [skillTag,return_skill]=React.useState(skills)

    
    //   end of the body of this function

    const appendTag=()=>{
        
        filter_tags(skillTag)
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
            {skillTag}</div>
        </>
    )
}