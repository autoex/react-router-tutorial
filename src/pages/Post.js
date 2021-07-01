import React from 'react';
import {useParams, useLocation} from 'react-router-dom'
const Post = () => {
    const {id} = useParams();
    const searchParams = new URLSearchParams(useLocation().search)
    return (
        <>
         <h2>Post id is: {id} </h2>
            <h2>{searchParams.get('name')}</h2>
        </>
    );
};

export default Post;