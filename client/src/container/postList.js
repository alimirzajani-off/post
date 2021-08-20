import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const PostList = () => {

    const [Data, setData] = useState([])

    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            getData()
        }
        mounted.current = true;
    }, [Data])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setData(res.data)
        })
    }

    const renderPost = () => {
        return Data.map(item => {
            return (
                <li key={item.id}>
                    <Link to={`/post/${item.userId}/${item.id}`}>
                        {item.title}
                    </Link>
                </li>
            )
        });
    }
    return (
        <div>
            {renderPost()}
        </div>
    )
}

export default PostList