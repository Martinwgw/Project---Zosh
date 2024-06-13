import axios from "axios";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NewsItems from './NewsItems'

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () =>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=space&apiKey=6564758f723b42f2a58ab64aca95f847')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])

    return(
        <div>
            {articles.map(article =>{
                return(
                    <NewsItems 
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    );
}
export default News;