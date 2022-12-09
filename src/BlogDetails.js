import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react-router-dom';
import useData  from './useData';
import { useHistory } from "react-router-dom";


const BlogDetails=()=>{
    const {  id }=useParams();
    const {data:blogs,ispending,error}=useData('http://localhost:8000/blogs/'+id);
   
    const history=useHistory();
    const handleDelete=()=>{
    fetch("http://localhost:8000/blogs/"+id ,{
      method:'DELETE'
    })
    .then(()=>{
      history.push("/");
    })
   }
    
    return (
      
    <div className="blog-details">
      
      {ispending && <div> Loading.....</div>}
      { error && <div> { error} </div>}
      { !ispending && (

        <article>

            <h2>{blogs.title}</h2>
            <p>Written by {blogs.author}</p>
            <div>{blogs.body}</div>
            <button type="button" className="btn" onClick={handleDelete}>Delete</button>
        </article>
      )}

    </div>
      
    


    )
}
export default BlogDetails;