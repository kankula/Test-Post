import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditComponent from './EditComponent'
import Post from './Post'
class AllPost extends Component {
    render() {
        return (
            <div className="all-post">
                <div className="max-width">
                    {this.props.posts.map((post) =>
                        <div key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id} /> : <Post key={post.id} post={post} />}
                        </div>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost)



