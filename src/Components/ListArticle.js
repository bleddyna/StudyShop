import React from 'react'
import CardArticle from './CardArticle'
import { Grid } from '@mui/material';
function ListArticle(props) {
    if (!props) {
        return (<div><h1>Pas d'article!</h1></div>)

    }
    else {
        const articlesListing = props.articles.map((article) => {
            if (article.price) return (<CardArticle name={article.name} price={article.price} />)
            else return null
        })
        return (
            <Grid container spacing={2}>
                {articlesListing}
            </Grid>
        )
    }
}

export default ListArticle