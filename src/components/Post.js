import { Component } from 'react';
import Arr from '../data/data';
import picAuthor from './img/person.png';



class Post extends Component {
    render() {
        return (
            <div id='newslist'>
                {Arr.map((item, index)=>(
                <div className="news-block" key={index}>
                            <div className="container">
                                <div className="top">
                                        <div className="info-top">
                                            <img src={picAuthor} className="author-pic" alt='authorpic' />
                                            <span className="black-text">{item.byline}</span>
                                            <span className="gray-text">in</span><span className="black-text">{item.section}</span>
                                            <span className="black-text">·</span><span className="gray-text">{item.published_date}</span>
                                        </div>
                                        <div className="top-left-block-div">
                                            <p className="post-title">{item.title}</p>
                                            <p className="post-brief-paragraph">{item.abstract}</p>
                                        </div>
                                    </div>
                                    <div className="bottom-block-div">
                                        <div className="bottom-post-info">
                                            <button className="btn-java-script">Java Script</button>
                                            <p className="min-read">12 min read</p>
                                            <p className="black-text">·</p>
                                            <p className="selected-for-you">Selected for you</p>
                                        </div>
                                        <div className="bottom-actions"></div>
                                    </div>
                                </div>
                                <img className="img-at-news-list" src={item.postPic} alt='postpic' />
                            </div>
                            ))
            }
            </div>
        )
    }
}

export default Post;