import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]= useState(false)
  const [currentPage, setCurrentPage]= useState(false)
  const [postPerPage, setpostPerPage]= useState(false)
  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
       
        setLoading(true)
        setPosts(res.data);
        setLoading(false)
      })

      .catch((err) => {
        console.log(err);
      });
    
  }, [ ]);

  const indexOfLastPage = currentPage * postPerPage
  const indexOfFirstPage = indexOfLastPage - postPerPage
  const currentPost = posts.slice(indexOfFirstPage, indexOfLastPage)

  return (
    <div>
      <ul>
        {posts.map( post => (
            <li key={post.id}>{post.title}</li>
        ))}

      </ul>
    </div>
  );
};

export default DataFetching;
