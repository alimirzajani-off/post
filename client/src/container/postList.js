import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import axios from 'axios'
import _ from 'lodash'

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
        sortField: 'title',
    },
    {
        name: 'body',
        selector: row => row.body,
        sortable: true,
        sortField: 'body',
    },
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
        sortField: 'id',
    },
];

const PostList = (props) => {

    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(false);

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

    const renderPost = (row) => {
        // return Data.map(item => {
        //     return (
        //         <li key={item.id}>
        //             <Link to={`/post/${item.id}`}>
        //                 {item.title}
        //             </Link>
        //         </li>
        //     )
        // });
        props.history.push(`/post/${row.id}`)
    }

    const handleSort = (column, sortDirection) => {
		console.log(column, sortDirection);
		setLoading(true);

		setTimeout(() => {
			setData(_.orderBy(Data, column.sortField, sortDirection));
			setLoading(false);
		}, 100);
	};

    return (
        <div>
            {/* {renderPost()} */}
            <DataTable title="json palceholder" columns={columns} data={Data} sortServeronSort={handleSort} progressPending={loading} persistTableHead onRowClicked={renderPost} pagination/>
        </div>
    )
}

export default PostList