import React, { Component } from "react";
import Notiflix from 'notiflix';


class Searchbar extends Component   {
    state = {
        query: ''
    }

    handelSubmit = (event) => {
        event.preventDefault();
        if (this.state.query.trim() === '') {
            Notiflix.Notify.info('Please input tag for searching images');
        }
        this.props.onSubmitForm(this.state.query);
        this.setState({query: ''})
    }
    handelChange = (event) => {
        this.setState({query: event.target.value})
    }
    render()
    {

        
        const {query} = this.state
        return (
            <header>
                <form onSubmit={this.handelSubmit}>
                    <button type="submit" >
                        <span>Search</span>
                    </button>
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.handelChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;