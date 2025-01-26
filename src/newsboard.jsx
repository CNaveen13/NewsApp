import React, { useState, useEffect } from "react";
import NewsItem from "./newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchNewsData = async () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=Enter your api key`;

    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.articles) {
        setArticles(data.articles);
      } else {
        throw new Error(data.message || "Failed to fetch news articles");
      }
    } catch (error) {
      setIsError({
        status: true,
        msg: error.message || "Something went wrong. Please try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [category]); // Re-run when `category` changes

  if (loading) {
    return (
      <div className="text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError.status) {
    return (
      <div className="text-center">
        <h2 style={{ color: "red" }}>{isError.msg}</h2>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="text-center">
        <h2>No articles available</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;



/*export default NewsBoard;

import {useState,useEffect} from "react";
import NewsItem from "./newsitem";
const NewsBoard = () =>{
    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));
        
    },[])
    return (
        <div>
          <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
          {articles.map((news, index) => {
  
      <NewsItem
      key={index}
      title={news.title}
      description={news.description}
      src={news.urlToImage}
      url={news.url}
    />
  
})}
 
         

        </div>
    )
}

export default NewsBoard; */
