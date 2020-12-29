import React from 'react';
import Post from './Post'

const PostList = (props) => {
    return (
    <>
        <h1> Post lists here </h1>
        {props.posts.map(post =>
        { return <Post key={post.id} post={post} />
        })}
    </>
    );
}
export default PostList;
