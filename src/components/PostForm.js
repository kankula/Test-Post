import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const title = this.getTitle.value
        const message = this.getMessage.value
        const data = {
            id: new Date(),
            title,
            message,
            edit: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ""
        this.getMessage.value = ""
    }

    render() {
        return (

            <div className="Post-form">
                <div className="max-width">
                    <h1>Create Post</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" ref={(input) => this.getTitle = input} placeholder="Enter Post Title" required />
                        <textarea cols="30" ref={(input) => this.getMessage = input} rows="5" placeholder="Enter Post" required />
                        <button className="post_button">Post</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default connect()(PostForm)
