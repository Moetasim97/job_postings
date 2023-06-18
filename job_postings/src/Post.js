import React,{useState} from "react"
import "./Post.css"
import Skill from "./Skills.js"


function Post ({single_post,filter_method,filter_tags}){





return (
    <>

    <div className="post_container container mb-4 ">
            <div className={"row border "} >
            <div className="col-md-6 border ">
                <div className="row">
                    <div className="d-flex flex-column">
                        <img src={single_post.Img} className="job_flags" alt="Job Asset"/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex ">
                        <div>{single_post.company}</div>
                        <div>{single_post.post}</div>
                        <div>{single_post.featured}</div>
                       

                        </div>
                    </div>

                </div>
              
            </div>
            <div className="col-md-6 border">
          <div className='d-flex justify-content-end px-2 align-content-center custom_padding'>
            
            
          {single_post.skill.map((skill,key)=>{
            return(
              <Skill skills={skill} className="d-flex" filter_setter ={filter_method}  filter_tags={filter_tags}/>)
              
          })}

          </div>
            </div>
            </div>
          </div>
    </>
)




}



export default Post