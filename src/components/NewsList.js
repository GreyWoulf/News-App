import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect (() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-08-12&sortBy=popularity&apiKey=f5ca716ab818428785bb086f400d93c3')
            console.log(response)
        }
        getArticles()
    }, [])
    return (
        <div>

        </div>
    )
}

export default NewsList