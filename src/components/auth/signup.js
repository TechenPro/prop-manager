import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';

class Signup extends Component {

  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      this.props.history.push('/dashboard');
    })

  }

  componentDidMount() {
    this.props.updateHeader('Welcome to the HOA Manager!', 'Please Login to Continue', false);
  }

  render() {
    return (
      <div className='sign-up'>
        <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    )
  }
}

export default connect(null, actions)(Signup);
