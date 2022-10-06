import React from 'react';
import SearchBar from './SearchBar.js';
import axios from 'axios';
import ImageList from './ImageList.js'
import unsplash from './unsplash.js'

class App extends React.Component {
  state = { images: [] }

  onFormSubmit = async (text) => {
    const response = await unsplash.get('/search/photos',{params: {query: text}})
    this.setState( { images: response.data.results } );
  }

  render() {
    return (
      <main>
        <div className='ui container' style={{marginTop: 20}}>
          <SearchBar onFormSubmit={this.onFormSubmit}/>
          <div>Найдено {this.state.images.length} изображений</div>
          <ImageList id="Image" images={this.state.images}/>
        </div>
      </main>
    )
  }
}

export default App 
