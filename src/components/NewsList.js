import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect (() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=weather +severe +extreme +disaster -phd -career&apiKey=f5ca716ab818428785bb086f400d93c3')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList