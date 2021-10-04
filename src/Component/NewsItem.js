import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date} = this.props;
        return (

            <div className="card my-3" >
                <img src={imageUrl ? imageUrl : "https://ichef.bbci.co.uk/news/1024/branded_news/14CE0/production/_120661258_tv070786749.jpg"}
                    className="card-img-top" style={{ height: '150px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small className="text-muted">by {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
