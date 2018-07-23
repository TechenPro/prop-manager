import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to handle submit')
    }

    onCancel = () => {
      console.log('trying to cancel');
    }

    render() {
        return (
            <div className='new-newsletter'>
              <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;
