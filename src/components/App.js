import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
    state = { images: [] }

    //api calling using axios
    //** 
    //using arrow function to prevent "this" from pulling the "SearchBar.js" 
    //function as ".this" so "App" becomes ".this"
    //can also use binding to do this
    //**
    //pulls axios from "unsplash"
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
                params: { query: term }
            });

        this.setState({ images: response.data.results})
    } 
    

    
    render() {

        return (
    
            <div className="ui container" style={{ marginTop: '10px'}}>     
                <SearchBar onSubmit={this.onSearchSubmit} /> 
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>)

    }


}

export default App