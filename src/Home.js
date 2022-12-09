import { useEffect, useState } from 'react';
import  BlogList from './BlogList';
import  useData from './useData';
   

const Home=()=>{
    
    //LOCAL DELETE
    const handleDelete=(id)=>{
        
       const newBlog=blogs.filter((blog)=>blog.id!==id);
      
       setBlogs(newBlog);
       
    }

   const {data:blogs,ispending,error}=useData("http://localhost:8000/blogs");
  
    // const [name,setName] = useState("Mukta");
    // const [age,setAge]=useState(20);
    // const handleClick=()=>{
    //    //console.log("Something");
    //   setName("Abhir");
    //   setAge(19);
    // }
// const handleClickAgain=(name)=>{
//     console.log("Hello "+name);
// }    
return (
<div className="Home">
    {ispending && <div> Loading.....</div>}
     <div> {error} </div>
    {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}/>} {/* PROPS*/}
   { /*<BlogList blogs={blogs.filter((blog)=>blog.authur==="Mukta")} title={"Mukt's Blogs"}/>*/}
    {/* <h2>This is Home</h2>
    <p>{name} is {age} years old</p>
    <button onClick={handleClick}>Click Me</button> */}
    {/* <button onClick={()=>handleClickAgain("Mukta") }>Click Me Again</button> */}
   {/* <button type="button" onClick={()=>{
         setName("Mukta");
    }}>Change name</button>
    <p>{name}</p>   */}
</div>
);
}
export default Home;