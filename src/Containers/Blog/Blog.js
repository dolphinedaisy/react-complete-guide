import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from "../../Components/Post/Post";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
import axios from "axios";

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        isError: false,
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                this.setState({isError: true});
            });
    }

    postClickHandler = (post) => {
        // of course I have post here, but just practising making Http Request using vanilla.js
        this.setState({selectedPostId: post.id});
    }

    render () {
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
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost postId={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
