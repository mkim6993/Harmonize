import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { bg: 'white', text: 'black' },
    dark: { bg: 'black', text: 'white' },
  }
  render() {
    return(
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
