import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

class postDetail extends React.Component {
    state = {
        Data: null
    }
    componentDidMount() {
        const { id, userId } = this.props.match.params
        console.log(this.props.match);
        axios.get('https://jsonplaceholder.typicode.com/posts/2/comments').then(res => {
            res.data.map(item => {
                if (item.id === id || item.postId === userId) {
                    console.log("hi");
                }
            })
        })
    }
    render() {
        return (
            <div>
           <Link to="/">
               <button>
                   back
               </button>
           </Link>
            </div>
        )
    }
}

export default postDetail