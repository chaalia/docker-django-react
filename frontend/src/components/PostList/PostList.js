import React from 'react';
import Post from './Post'
import {Button} from 'react-bootstrap';

const PostList = (props) => {
    return (
    <>
        <Button onClick={props.show} variant='primary'>{props.status ? 'Hide posts' : 'Show Posts'}</Button>
        {props.status && 
        props.posts.map(post =>
        { return <Post key={post.id} post={post} />
        })}
    </>
    );
}
export default PostList;
