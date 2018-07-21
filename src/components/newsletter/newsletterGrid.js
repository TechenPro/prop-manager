import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
              {/*Add Button*/}
              {/*Box*/}
              <NewsletterBox date={new Date()}/>
              {/*Archive*/}
              {/*Content*/}
            </div>
        )
    }
}

export default NewsletterGrid;
