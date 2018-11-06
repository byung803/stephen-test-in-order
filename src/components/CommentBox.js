import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

export class CommentBox extends React.Component {
    state = { comment: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState(() => ({ comment: '' }));
    }

    handleChange = (e) => {
        const comment = e.target.value;
        this.setState(() => ({ comment }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} cols="30" rows="10" value={this.state.comment}></textarea>
                <div>
                    <button type="submit">Submit Text</button>
                </div>
            </form>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     saveComment: (comment) => { dispatch(saveComment(comment)) }
// })

export default connect(null, { saveComment })(CommentBox);