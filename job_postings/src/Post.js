import React,{useState} from "react"
import "./Post.css"
import Skill from "./Skills.js"


function Post ({single_post,filter_method,filter_tags}){





return (
    <>

    <div className={ single_post.featured?"post_container container mb-4 featured_post":"post_container container mb-4 post"}>
            <div className={"row "} >
            <div className="col-md-6  ">
                <div className="d-flex ">
                    <div className="d-flex flex-column">
                        <img src={single_post.Img} className="job_flags" alt="Job Asset"/>
                    </div>
                    <div className="d-flex flex-column   ">
                        <div className="d-flex p-3 ">
                        <div className="company_name"><strong>{single_post.company}</strong>   </div>
                        <div className={single_post.post? "new mx-1" : ""}>{single_post.post}</div>
                        <div className={single_post.featured? "featured mx-1":''}>{single_post.featured}</div>
                        </div>

                        <div className="job_title">{single_post.jobtitle}</div>
                        <div className="d-flex p-3 text-secondary h6">
                            <div className="mx-1">{single_post.contract} .</div>
                            <div className="mx-1">{single_post.time}  .</div>
                            <div className="mx-1">{single_post.location}</div>
                        </div>
                    </div>

                </div>
              
            </div>
            <div className="col-md-6 ">
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