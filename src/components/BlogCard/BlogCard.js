import React from 'react'
import { Link } from "react-router-dom";
import './BlogCard.css'

function BlogCard(props){

    let cardContent = props.movieData;

    return(
        <Link className='card-container' to="cardDetail" state={{ movieContent: cardContent }}>
            <img className='card-img'  src={cardContent.imageUrl} alt="cardImage"/>
            <div className='card-content'>
                <div className='card-name'>{cardContent.movieName}</div>
                <div className='card-title'>{cardContent.title}</div>
                <div className='card-text'>{cardContent.text}</div>
                <div className='card-author'>Yazar : {cardContent.author.name}</div>
            </div>
        </Link>
    )
}

export default BlogCard;