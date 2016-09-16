// @flow

/*------------------------------- Description --------------------------------//

  Title: Default Button Controller
  - Render template

//----------------------------------------------------------------------------*/

//------------------------------ Dependencies --------------------------------//

import React, { Component } from 'react';

//------------------------------- Template -----------------------------------//

import Template from './Templates';

//------------------------- Higher order component ---------------------------//

export default
((Component = Template) => class extends Component {
  render(){ return
    <Component {...this.props} {...this.state}/>
  }
})();
