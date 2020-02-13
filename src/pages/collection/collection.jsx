import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';

const CollectionPage = ({ collection }) => {
  //const { title, items } = collection;
  let renderHTML = <p>Collection not found ...</p>;
  if (collection)
    renderHTML = (
      <div className="collection-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
          {collection &&
            collection.items.map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  return renderHTML;
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
