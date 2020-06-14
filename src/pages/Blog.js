import React from 'react'

import { BLOGS } from '../data/blogs'

const Blog = () => (
    <div className='container'>
        <div className='blog-title'>Blog</div>
        {BLOGS.map((blog, index) => (
            <div className='day-blog' key={index}>
                <h1>{`Day ${index + 1}`}</h1>
                <p>{blog}</p>
            </div>
        ))}
    </div>
)

export default Blog
