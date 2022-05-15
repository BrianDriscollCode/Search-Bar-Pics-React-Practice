import React from "react"

class SearchBar extends React.Component {
    state = { term: 'this is cool'}
   
    onFormSubmit = (e) => {
        e.preventDefault(); //prevents forms from submitting themselves
        
        this.props.onSubmit(this.state.term)
    }

    render() {

        

        //controlled component 
        //instead of reaching into the html, the state will hold the value
        //we DO NOT want to use html elements to get data, storing in state is much more useful
        return (
        
        <div className="ui segment">  
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value }) } 
                    />
                </div>
                
            </form>
        </div>
        
        ) 

    }
}

export default SearchBar