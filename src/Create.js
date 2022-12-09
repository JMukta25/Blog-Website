 import { useState } from "react";
 import { useHistory } from "react-router-dom";
 const Create=()=>{
 const [title,setTitle]=useState("");   
 const [body,setBody]=useState("");
 const [author,setAuthor]=useState("");
 const [ispending,setisPending]=useState(false);
 const history=useHistory();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
    setisPending(true);
    fetch("http://localhost:8000/blogs",{
        method:'POST',
        headers : {"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    })
    .then(()=>{
        console.log("new blog added");
        setisPending(false);
        history.push("/");
    })
     
 }
    return(
<div className="create">
<h2>Add a new blog</h2>   
<form onSubmit={handleSubmit}>
    <div className="title">
<label>Blog Title</label><br></br>
<input  type="text"
 required value={title}
  onChange={(e)=>{
    setTitle(e.target.value)}}></input>
    </div>
<div className="body">
<label >Blog Body</label><br></br>
<textarea required
value={body}
onChange={(e)=>{
    setBody(e.target.value);

}}
 ></textarea></div>
<div className="author">
<label >Blog Author :</label><br></br>
<select
value={author}
onChange={(e)=>{
    setAuthor(e.target.value);
}}
>
<option value="Mukta">Mukta</option>
<option value="Abhir">Abhir</option>
</select></div>
{/* <p>{title}</p>
<p>{body}</p>
<p>{author}</p> */}
{ !ispending && <button className="addbtn">Add Blog</button>}
{ ispending && <button className="addbtn">Adding Blog....</button>}
</form>
</div>  

)

}
export default Create;