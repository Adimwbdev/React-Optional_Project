import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../components/API/youtube';
import VideoList from "./VideoList";

//Class because it holds all the states


class App  extends React.Component {
    state = {videos: [] };

 onTermSubmit = async term => {
    const response = await youtube.get('/search',{
        params:{
            q: term
        }
    });
    
    this.setState({videos: response.data.items});
};


render(){
return (
    <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
    </div>
        );
    }
}

export default App