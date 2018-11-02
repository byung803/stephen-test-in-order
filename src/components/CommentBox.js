import React from 'react';

class CommentBox extends React.Component {
    state = { comment: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.comment);
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

export default CommentBox;