import React,{useState} from "react"
import {useRef} from "react"
export default function Skill({skills,filter_setter,entire_model,ultimate_filterer})
{
    const certain_skill=skills

    const [array,setArray]=React.useState([])
    const [clicked,setClickState]=React.useState(false)
// this is a terrible idea

    const addTag=()=>{
      setArray((prevState)=> prevState=[...prevState,certain_skill]         
)
    }

    const changeState=()=>{
        setClickState((prevState)=>prevState=true)
        filter_setter()
        addTag()
        var updated_model=[];
        for(var i = 0 ; i< entire_model.length;i++){
            for(var j=0;entire_model[i].skill.length;j++){
                if (array[0]==entire_model[i].skill[j])
                {updated_model.push(entire_model[i])}
            }
        }

        ultimate_filterer()
        
    }
    if(clicked==true){
        
    }
    console.log(array)
    return (
        <>
        <div className="tag"
        onClick={changeState}>
            {certain_skill}</div>
        </>
    )
}