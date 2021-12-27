// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// class EditComponent extends Component {

    // handleEdit = (e) => {
    //     e.preventDefault()
    //     const newTitle = this.getTitle.value
    //     const newMessage = this.getMessage.value
    //     const data = {
    //         newTitle,
    //         newMessage
    //     }
    //     this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    // }
//     render() {
//         return (
            // <div className="Post-form">
            //     <div className="max-width">
            //         <form className="form" onSubmit={this.handleEdit}>
            //             <input type="text" ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder="Enter Post Title" required />
            //             <textarea cols="30" ref={(input) => this.getMessage = input} defaultValue={this.props.post.message} rows="5" placeholder="Enter Post" required />
            //             <button className="update_button">Update</button>
            //         </form>
            //     </div>
            // </div>
//         )
//     }
// }
// export default connect()(EditComponent)

import React from 'react'
import { connect } from 'react-redux'
const EditComponent = (props) => {
    
    const handleEdit = (e) => {
        e.preventDefault()
        let newTitle = e.target.getTitle.value
        let newMessage = e.target.getMessage.value
        const data = {
            newTitle,
            newMessage
        }
        props.dispatch({ type: 'UPDATE', id: props.post.id, data: data })
    }
    return (
        <div className="Post-form">
                <div className="max-width">
                    <form className="form" onSubmit={handleEdit}>
                        <input type="text" name='getTitle' defaultValue={props.post.title} placeholder="Enter Post Title" required />
                        <textarea cols="30" name='getMessage' defaultValue={props.post.message} rows="5" placeholder="Enter Post" required />
                        <button className="update_button">Update</button>
                    </form>
                </div>
            </div>
    )
}

export default connect()(EditComponent)
