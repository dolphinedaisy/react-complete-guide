import React, { Component } from 'react';
import classes from './FullPost.module.css';

class FullPost extends Component {

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.post) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
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
