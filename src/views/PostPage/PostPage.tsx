import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Posts } from '../../type';
import React, { useState } from "react";
import HighLight from "./HighLight";

const PostPage : React.FC = () => {
  const postList = useLoaderData() as Posts[];
  const [search,setSearch] = useState<string>('');

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value);
  }
  
  return (
    <div>
      <input className="border border-black ps-2" value={search} onChange={handleInput} placeholder="Search word..." type="text" />
        {
          postList.filter((post)=>post.title.includes(search)).map((post)=>(
          <div key={post.id}>
            <HighLight text={post.title} search={search}/>
          </div>
          ))
        }
    </div>
  )
}

export const PostLoader : LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result : Posts = await response.json();
  return result;
}

export default PostPage
