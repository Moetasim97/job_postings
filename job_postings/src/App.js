import React,{ useState } from 'react'

import HeaderImg from "./header.png"
import './App.css';
import Post from "./Post.js"




// This is the model object that came from outside our app.




function App({model}) {

  


const [original_posts,setPosts]=React.useState(model)
const[filtered_state,setFilterArea]=React.useState(false)

const setFilterState=()=>{
  setFilterArea((prevState)=> prevState=true)
}

const hideFilter=()=>{
  setFilterArea((prevState)=> prevState=false)
}

const filter_posts=()=>{
  setPosts((newState)=>{
    return newState
  })
}




  

  return (
   
    <>

   

    <div className="App">
     <div className='header_div'>
      <img src={HeaderImg}/>
      <div className='container'>
        {filtered_state
         ? 
  <div className="filter_bar   border p-4 d-flex justify-content-between" >
         <div className="tags_area d-flex">
        </div>
        <div className="clear_div " onClick={hideFilter}>Clear</div>
        </div>
        :
        <div></div>
            }
      

      </div>
      <div className='mt-5'>
        {original_posts.map((post,key)=>{
          return(
            <Post single_post={post} whole_posts={original_posts} filter_method={setFilterState} ultimate_filter={filter_posts}  />
          )
        })}
        
      </div>


    
     </div>
    </div>
    </>
  );
}

export default App;
