import React from 'react';

class PasswordInput extends React.Component {
  // State is being initialized in a slightly different way than is shown
  // in the previous videos. You can ignore this different syntax for now.
  constructor(props) {
      super(props);
      this.state = { password: '', isFocused: false };
  }

  render() {
      return (
          <div className="ui segment">
              <form className="ui form">
                  <div className="field">
                      <label>Enter Password</label>
                      <input 
                          type="password"
                          // value={this.state.password}
                          onChange={ (event) => { this.setState({password: event.target.value}) } }
                          onFocus = { this.setState({isFocused: true}) }
                      />
                  </div>
                  {this.state.password.length < 8 && this.state.isFocused ? <span style={ {color: 'red' } }>*Password must be at least 8 characters</span> : <span></span> }
              </form>
          </div>
      );
  }
}

export default PasswordInput 
