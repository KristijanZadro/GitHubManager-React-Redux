import React from 'react'
import LoadingGif from '../Gif/loading-arrow.gif'
import '../App.css'

export default function Loading() {
    return (
        <div className="loading">
            <img src={LoadingGif} alt="loading..." />
        </div>
    )
}
