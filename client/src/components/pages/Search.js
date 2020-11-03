import React, { Component } from "react";
import Main from "../Main/index";
import Wrapper from "../Wrapper/index";
import API from "../../../utils/API";




class Search extends React.Component {
    state = {
        value: "",
        results: ""
    };

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);


    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleMainSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };


    render() {
        return (
            <Wrapper>
                <Main />
               
            </Wrapper>
        )
    }
}

export default Search;