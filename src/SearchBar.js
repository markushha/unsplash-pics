import React from 'react';

class SearchBar extends React.Component {
  state = { text: ''}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
            value={this.state.text}
            type='text'
            onChange={ (event) => { this.setState({text: event.target.value}) } }>
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
