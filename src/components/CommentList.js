import React, { Component } from 'react';
import { connect } from 'react-redux'

export class CommentList extends Component {
    renderComemnts() {
        return this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>;
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComemnts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => ({
    comments
})

export default connect(mapStateToProps)(CommentList);