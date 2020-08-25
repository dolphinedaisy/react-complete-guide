import React, { Component } from 'react';
import classes from './Blog.module.css';
import Post from "../../Components/Post/Post";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
import axios from "axios";

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null
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
            });
    }

    postClickHandler = (post) => {
        this.setState({selectedPost: post});
    }

    render () {
        let posts = this.state.posts.map((post, i) => {
            return <Post key={post.id}
                         author={post.author}
                         clicked={() => this.postClickHandler(post)}
                         title={post.title.substring(1, 4)} />;
        });

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost post={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;