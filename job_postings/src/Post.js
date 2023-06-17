import React,{useState} from "react"
import "./Post.css"
import Skill from "./Skills.js"


function Post ({single_post,filter_method,whole_posts,ultimate_filter}){

const [post_data,setPost]=React.useState(single_post)






return (
    <>

    <div className="post_container container mb-4 ">
            <div className={"row border "} >
            <div className="col-md-6 border ">
                <div className="row">
                    <div className="d-flex flex-column">
                        <img src={post_data.Img} className="job_flags" alt="Job Asset"/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="d-flex ">
                        <div>{post_data.company}</div>
                        <div>{post_data.post}</div>
                        <div>{post_data.featured}</div>
                       

                        </div>
                    </div>

                </div>
              
            </div>
            <div className="col-md-6 border">
          <div className='d-flex justify-content-end px-2 align-content-center custom_padding'>
            
            
          {post_data.skill.map((skill,key)=>{
            return(
              <Skill skills={skill} className="d-flex" filter_setter ={filter_method} entire_model={whole_posts} post_filterer={ultimate_filter}/>)
              
          })}

          </div>
            </div>
            </div>
          </div>
    </>
)




}



export default Post