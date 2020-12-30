import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import Less from './components/less'
import {Container} from 'react-bootstrap';

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({data}) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

class App extends Component {
    state = {
                posts: [
                {
                id:1,
                text:'hello world'},
                {
                id:2,
                text:'hello guys'},
                {
                id:3,
                text:'hello bro'}],
                showPosts: false
            }
    showPostsHandler = () =>{
      const show = this.state.showPosts
      this.setState({showPosts: !show})
    }
    render() {
    return (
        <div className="App">
           <div>
             <Container>
           <PostForm />
           <hr />
           <PostList posts ={this.state.posts} status={this.state.showPosts} show={this.showPostsHandler} />
            </Container>
        </div></div>
    );
    }
}

export default App;
