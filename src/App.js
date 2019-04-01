import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={articles: [
      
      {
        urlToImage: "https://source.unsplash.com/random/400x250/?bunny",

    title: "Testnyhet 2 ",
    description: "beskrivning av testnyheten",

      
  }, 
  {
    urlToImage: "https://source.unsplash.com/random/400x250/?dog",

title: "Testnyhet 5 ",
description: "beskrivning av testnyheten",

  
}, ]
};
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=985741af249d457195b117d653fa35d9").then( function(response){
      return response.json()
    } ).then( jsondata=>{
      this.setState({articles: jsondata.articles})
    }).catch(error =>{
      this.setState({
        
        articles: [{

        urlToImage:"fejk.jpg",
        title: "något gick fel",
        description: `vi fick status `

        }]
      });
    })
  
    }
  render() {
    return (
     <Nyhetslista minaArtiklar={this.state.articles} />
    );
  }
}

export default App;
