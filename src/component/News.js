import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
   const[articles,setArticles] =useState([])
   const[loading,setLoading] =useState(true)
   const[page,setPage]=useState(1)
   const[totalResults,setTotalResults]=useState(0)


   const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

    
  const  updateNews=async() =>{
 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=21bc08aaf3474ec8afc405b44427d510&page=${page}&pageSize=${props.pageSize}`;
 

          setLoading(true)
          let data=await fetch(url);
     let parsedData=await data.json()
     

   setArticles(parsedData.articles)
  
   setTotalResults(parsedData.totalResults)
   setLoading(false)
  

  }

 
  useEffect(()=>{
     document.title=`${capitalizeFirstLetter(props.category)}-NewsDose`
    updateNews();
  },[])


  const fetchMoreData=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=21bc08aaf3474ec8afc405b44427d510&page=${page}&pageSize=${props.pageSize}`;
    setPage(page+1)
    
    let data=await fetch(url);
  let parsedData=await data.json()

  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)

  };

    return (
      <>
       
          <h2 className="text-center">Top Headlines from {capitalizeFirstLetter(props.category)}</h2>

        {loading && <Spinner my="10" />}
         
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          
        <div className="container">
          <div className="row">
            { articles.map((element)=>{
              return <div className="col-md-4"  key={element.url}>
             
            < NewsItem
                      title={element.title? element.title:""}
                      description={element.description?element.description:""}
                      urlToImage={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />

              </div>
            })

            }
          </div>
          </div>

       </InfiniteScroll>
         
       
      
      </>
    )
  }


News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
}

News.propTypes = {
  country:PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News;
