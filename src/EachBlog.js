import React,{useEffect,useState} from 'react'
import AllBlogs from './AllBlogs'
import css from './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const EachBlog=()=>{
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
         axios.get("http://localhost:4000/bring")
         .then((res)=>{
             setBlogData(res.data)
         })
    },[])
    return(
        <div className='eachBlogContainer'>
            {blogData.map((blog)=>{
               return <div className='card' key={blog.id}>
                            <div className='title'>
                                <h3>{blog.name}</h3>
                            </div>
                            <div className='btn'>
                                <Link to={"/blogDescrip/"+blog.id}><button>SEE description</button></Link>
                            </div>
                      </div>
                })
            }
        </div>
    )
}
export default EachBlog