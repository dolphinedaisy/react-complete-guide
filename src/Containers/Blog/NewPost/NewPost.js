import React, { Component } from 'react';

import classes from './NewPost.module.css';
import axios from "axios";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    addPostHandler = () => {
        const body = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        if(this.state.author && this.state.content && this.state.title) {
            axios.post('/posts', body)
                .then((data) => {
                    console.log('data : ', data);
                });
        }
    }

    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Dhwani">Dhwani</option>
                    <option value="Vaidehi">Vaidehi</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
