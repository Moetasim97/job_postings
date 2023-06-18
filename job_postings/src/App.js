import React,{ useEffect, useState } from 'react'

import HeaderImg from "./header.png"
import './App.css';
import Post from "./Post.js"
import FilterTags from './Filter';




// This is the model object that came from outside our app.




function App({model}) {

  


var [original_posts,setPosts]=React.useState(model)
const[filtered_state,setFilterArea]=React.useState(false)
var [filtered_tags,setFilteredTags]=useState([])



// Here I'm defining a function to increment tags to the filter area, this function will be "drilled" to the grandchild
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
const reduce_tags=(job)=>{
  const updatedArray = filtered_tags.filter((element) => element !== job);
  filtered_tags=updatedArray
  setFilteredTags(filtered_tags);
  
}



var model_copy=model

useEffect(
  ()=>{
    var fresh_copy=[]
    console.log("i'm supposed to run now")
    console.log(fresh_copy)
   for(let i=0; i<model_copy.length;i++)
   {
    console.log("i'm t oo")
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
  <div className="filter_bar p-4 d-flex justify-content-between" >
         <div className="tags_area d-flex">
          <FilterTags tags={filtered_tags} reduce_tags={reduce_tags}/>
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
