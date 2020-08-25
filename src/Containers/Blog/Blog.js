import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from "../../Components/Post/Post";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";

class Blog extends Component {
    render () {
        return (
            <div>
                <section className={classes.Posts}>
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
