import React from 'react';

const Post = ({match}) => {
    return (
        <>
         <h2>Post id is: {match.params.id} </h2>
        </>
    );
};

export default Post;