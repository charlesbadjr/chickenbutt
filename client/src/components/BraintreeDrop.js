import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { setFlash } from '../reducers/flash';
import { connect } from 'react-redux';
import { setHeaders } from '../reducers/headers';
import { Redirect } from 'react-router-dom';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';

class BraintreeDrop extends Component {
  state = { 
    loaded: false, 
    token: '',
    redirect: false,
    transactionId: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;

    axios.get('/api/braintree_token')
      .then( res => {
        const { data: token, headers } = res;
        dispatch(setHeaders(headers))
        this.setState({ token, loaded: true });
      })
      .catch( res => {
        dispatch(setHeaders(res.headers));
        dispatch(setFlash('Something whent wrong so nothing was charged: Try Again!', 'red'));
    });
  }
  
  handlePaymentMethod = (payload) => {
    const { dispatch, amount } = this.props;

    axios.post('/api/payment', { amount, ...payload })
      .then(res => {
        const { headers, data: transactionId } = res;
        dispatch(setHeaders(headers));
        this.setState({ redirect: true, transactionId });
      })
      .catch(res => {
        dispatch(setFlash('Error Posting Payment. Try Again!', 'red'));
        dispatch(setHeaders(res.headers));
        window.location.reload();
    });
  }

  render () {
    const { loaded, token, redirect, transactionId } = this.state;

    if(redirect)
      return(
        <Redirect to={{
          pathname: '/payment_success',
          state: { amount: this.props.amount, transactionId }
        }}/>
      );
    if(loaded)
      return (
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      );
    else
      return(
        <Dimmer active>
          <Loader>Loading. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default connect()(BraintreeDrop);