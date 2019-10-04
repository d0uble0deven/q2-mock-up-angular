import React, { Component } from 'react'
import './BlogForm.css'
import PropTypes from 'prop-types'

class BlogForm extends Component {
    state = {
        title: '',
        content: '',
        user: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log('line 20 in BlogPost/index: ', event)
        this.props.handleAddPost(this.state) //this is what actually sets the state
    }

    render() {
        return (

            <form className="blog-form" onSubmit={this.handleSubmit}>
                <h1>{this.state.title}</h1>
                <div className='post-title-author'></div>
                <label> Title </label>
                <input
                    type="text"
                    name="title"
                    onChange={this.handleOnChange}
                    value={this.state.title}
                />
                <label> User </label>
                <input
                    type="text"
                    name="user"
                    onChange={this.handleOnChange}
                    value={this.state.user}
                />
                <label> Content </label>
                <input
                    type="text"
                    name="content"
                    onChange={this.handleOnChange}
                    value={this.state.content}
                />
                <input type="submit" value="add"></input>
                <button
                    className="button-primary"
                    onClick={this.props.handleToggle}
                >
                    Close</button>
            </form>

        )
    }
}

export default BlogForm

BlogForm.propTypes = {
    handleToggle: PropTypes.func,
    handleAddPost: PropTypes.func
}