import React, { Component } from 'react';
import classes from './FullPost.module.css';
import axios from "axios";


class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if((this.props.postId && !this.state.loadedPost) || (this.state.loadedPost && this.state.loadedPost.id && this.state.loadedPost.id !== this.props.postId)) {
            console.log('calling for : ', this.props.postId);
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.postId)
                .then((response) => {
                    // console.log('loadedPost response : ', response.data);
                    this.setState({loadedPost: response.data});
                });
        }
    }

    render () {
        let post = null;

        if(this.props.postId) {
            post = <p>Please select a Post!</p>
        }

        if(this.state.loadedPost) {
            // console.log('this.props.postId : ', this.props.postId);
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;
