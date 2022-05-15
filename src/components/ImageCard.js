import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans: 0 } 

        //using react references to get information
        //about a item in the DOM
        //in this case, we are gettin height
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //console.log(this.imageRef.current.clientHeight) //height of item
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //callbacks must be binded, hence using arrow function
    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (

            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>

                <img 
                    ref={this.imageRef} //reference
                    alt={description}
                    src={urls.regular}
                />

            </div>

        )
    }
}

export default ImageCard

