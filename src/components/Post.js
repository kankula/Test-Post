// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// class Post extends Component {
//     render() {
//         return (
// <div className="post">
//     <h2>{this.props.post.title}</h2>
//     <p>{this.props.post.message}</p>
//     <div className="button-container">
//         <button className="edit_button" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>edit</button>
//         <button className="delete_button" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>delete</button>
//     </div>
// </div>
//         )
//     }
// }
// export default connect()(Post)

import React from 'react'
import { connect } from 'react-redux'
const Post = (props) => {
    return (
        <div className="post">
            <h2>{props.post.title}</h2>
            <p>{props.post.message}</p>
            <div className="button-container">
                <button className="edit_button" onClick={() => props.dispatch({ type: 'EDIT_POST', id: props.post.id })}>edit</button>
                <button className="delete_button" onClick={() => props.dispatch({ type: 'DELETE_POST', id: props.post.id })}>delete</button>
            </div>
        </div>
    )
}

export default connect()(Post)
