import React,{ useEffect, useState } from 'react'

import HeaderImg from "./header.png"
import './App.css';
import Post from "./Post.js"




// This is the model object that came from outside our app.




function App({model}) {

  


var [original_posts,setPosts]=React.useState(model)
const[filtered_state,setFilterArea]=React.useState(false)
var [filtered_tags,setFilteredTags]=useState([])




const incrementTags=(tag)=>{
  // this logic is for preventing the tags from being added more than once to the filter tags array
  if(filtered_tags.includes(tag)){
    filtered_tags.pop(tag)
  }
  setFilteredTags((prevState)=>prevState=[...prevState,tag])
}

const setFilterState=()=>{
  setFilterArea((prevState)=> prevState=true)
}

const hideFilter=()=>{
  setFilterArea((prevState)=> prevState=false)
  setFilteredTags((prevState)=>prevState=[])
}

const filter_posts=()=>{
  setPosts((newState)=>{
    return newState
  })
}
var model_copy=[...original_posts]

useEffect(
  ()=>{
    var fresh_copy=[]
    
   for(var i=0; i<model_copy.length;i++)
   {
  
    function isArraySubset(subsetArray, mainArray) {
      return subsetArray.every((value) => mainArray.includes(value));
    }
    
    const isSubset = isArraySubset(filtered_tags, model_copy[i].skill);
    

    if(isSubset){
      fresh_copy.push(model_copy[i])
    }

   }
   
  
   setPosts(fresh_copy)
  }
 
  ,[filtered_tags]
)
useEffect(
  ()=>{
    if(!filtered_state){
      setPosts(model)
    }
  },[filtered_state]
)

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
            <Post single_post={post}  key={key} filter_method={setFilterState}  filter_tags={incrementTags} />
          )
        })}
        
      </div>


    
     </div>
    </div>
    </>
  );
}

export default App;
