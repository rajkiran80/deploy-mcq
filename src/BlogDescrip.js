import React,{useState,useEffect} from 'react'
import css from './style.css'
import { useParams } from 'react-router-dom'
import AllBlogs from './AllBlogs'
import axios from 'axios'

const BlogDescrip=()=>{
    let topicId= useParams().id;
    const [blogDetail,setBlogDetail]=useState({})
    useEffect(()=>{
        axios.post("http://localhost:4000/bringEachDescription",{topicId})
        .then((res)=>{
            setBlogDetail(res.data[0])
        })
    },[])
    return(
        <div className='blogDescripContainer'>
             <h2>Blog description</h2>
             <div className='descripDetails' key={blogDetail.id}>
                    <h3>{blogDetail.name}</h3>
                    <p>{blogDetail.description}</p>
             </div>
        </div>
    )
}
export default BlogDescrip