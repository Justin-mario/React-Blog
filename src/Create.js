import { useState } from "react";
import {useHistory} from 'react-router-dom'



const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('select author');
  const[isPending, setIsPending] = useState(false)
  const history = useHistory();

  const handleSubmit =(e)=> {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);
    fetch(' http://localhost:8000/blogs',{
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('new blog created')
      setIsPending(false)
      setTitle('');
      setBody('');
      setAuthor('select author');
      history.push('/')
      // history.go(-1);
    });
   
  }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title</label>
          <input type="text" required value = {title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea required value = {body} 
          onChange={(e)=> setBody(e.target.value)}></textarea>
          <label>Blog author:</label>
          <select value={author}
          onChange={(e)=> setAuthor(e.target.value)}>
          <option value="select author">select author</option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          { isPending && <button>Adding Blog...</button>}
        </form>
    </div>
  );
}

export default Create