// @flow

/*------------------------------- Description --------------------------------//

  Title: Default Button Controller
  - Render template
  - May receive children
  - May receive onPress prop

//----------------------------------------------------------------------------*/

//------------------------------ Dependencies --------------------------------//

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

//--------------------------------- Class ------------------------------------//

export default
class extends Component {
  constructor(){ super(props) }
  render(){
    this.props.onPress
      ? <TouchableOpacity>{this.props.children}</TouchableOpacity>
      : <View>{this.props.children}</View>
  }
};
