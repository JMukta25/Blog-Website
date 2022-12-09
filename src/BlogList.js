 
 import {Link} from 'react-router-dom'
 const BlogList=({blogs,handleDelete})=>{
    
    
    
    return (
        
        <div className="BlogList">
          
        {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            <Link to={ `/BlogDetails/${blog.id}`}>
            <h2>{blog.title}</h2>
            </Link>
            <p> Written By {blog.author}</p>
    
        </div>
       ) )}
        </div>);
}
export default BlogList;