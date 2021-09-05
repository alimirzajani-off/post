import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

class postDetail extends React.Component {
    state = {
        Data: {title:''}
    }
    componentDidMount() {
        this.getData()
    }

    getData() {
        const { id, userId } = this.props.match.params
        axios.get('https://jsonplaceholder.typicode.com/posts/2/comments').then(res => {
            res.data.map(item => {
                if (item.id == id) {
                    this.setState({
                        Data: {
                            title: item.name,
                            content:item.body,
                            email:item.email
                        }
                    })
                }
            })
        })
    }

    renderDetail(){
        return(
            <div>
                <h4>title:</h4>
                {this.state.Data.title}
                <h4>content:</h4>
                {this.state.Data.content}
                <h4>email:</h4>
                {this.state.Data.email}

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderDetail()}
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