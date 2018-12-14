import React, { Component } from 'react';
import { Header, Segment, Input, Label, Divider, Image } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';

class PayMe extends Component {
  state = { amount: 150.50 };

  render() {
    const { amount } = this.state;

    return (
      <div>
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Charles Jergins Trust: </Header>
        <div className="Donation_Descript"> 
        <p> 
          We all want to provide a better future for the generation to follow. 
          Sustsainable housing is the best way to do this. Solar plannels, 
          water conservation and reuse along with environmental precautions will go a long way.
        </p>
        <h3> Sustainable Homes </h3>
        <p >
          pros of current solutions:
          Cons of current solutions:

          Proposed Idea:
        </p>
        <h3> Solar Solutions</h3>
        <p> stuff </p>
        <h3> Water Conservation </h3>
        <p>
          boobs
        </p>
        </div>
        <Image centered size='small' src='http://www.homedeliveryscript.com/uploads/general-store.jpg' />
        <Label color='green'>Gift Amount</Label>
        <Input value={amount} disabled style={{ fontSize: '18px' }} />
        <Divider />
        <BriantreeDrop amount={amount} />
      </Segment>
      </div>
    );
  }
}

export default PayMe;