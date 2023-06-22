import React from "react"





export default function FilterTags({tags,reduce_tags}){

    

    const[many_tags,setTags]=React.useState(tags)


    

    console.log(tags)
    return (
        <>
        {tags.map((tag,key)=>{

            return (<>
                <div className="d-flex mx-1 ">
                <div className="tag " key={tag}>{tag}</div><span className="x_style" onClick={(e)=>{
                    var input =e.target.parentElement.firstChild.textContent
                    reduce_tags(input)
                }}>x</span>
                </div>
               

                </>
            )
            
        })}
        </>
    )
}