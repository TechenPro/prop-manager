import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
              {/*Add Button*/}
              {/*Box*/}
              <NewsletterBox date={new Date()}/>
              {/*Archive*/}
              <NewsletterArchive/>
              {/*Content*/}
            </div>
        )
    }
}

export default NewsletterGrid;
