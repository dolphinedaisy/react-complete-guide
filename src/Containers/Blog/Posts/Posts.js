import React, { Component } from "react";
import Post from "../../../Components/Post/Post";
import axiosInstance from "../../../axios";
import classes from "./Posts.module.css";

class Posts extends Component {

    state = {
        posts: [],
    };

    componentDidMount() {
        axiosInstance.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0,3);
                const updatedPosts = posts.map(rd => {
                    return {
                        ...rd,
                        author: 'Dhwani'
                    };
                })
                this.setState({posts: updatedPosts});
            })
            .catch((err) => {
                // this.setState({isError: true});
            });
    }

    postClickHandler = (post) => {
        // of course I have post here, but just practising making Http Request using vanilla.js
        this.setState({selectedPostId: post.id});
    }

    render() {
        let posts = null;
        if(this.state.isError) {
            posts = <div className="p-3 my-2 bg-danger text-white">Some Error Occured</div>
        } else {
            posts = this.state.posts.map((post, i) => {
                return <Post key={post.id}
                             author={post.author}
                             clicked={() => this.postClickHandler(post)}
                             title={post.title.substring(1, 4)} />;
            });
        }

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;
