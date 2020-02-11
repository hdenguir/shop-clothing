import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'HATS',
          id: 1,
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'hats'
        },
        {
          title: 'JACKETS',
          id: 2,
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: ''
        },
        {
          title: 'SNEAKERS',
          id: 3,
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: ''
        },
        {
          title: 'WOMENS',
          id: 4,
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          linkUrl: ''
        },
        {
          title: 'MENS',
          id: 5,
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          linkUrl: ''
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
