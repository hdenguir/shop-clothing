import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCollectionsForPreview,
  selectErrorMessage,
} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';

import './collections-overview.scss';

export const CollectionsOverview = ({
  collections,
  errorMessage,
}) => (
  <div className="collections-overview">
    {errorMessage && <p>{errorMessage}</p>}
    {collections.map(({ id, ...otherscollectionsProps }) => (
      <CollectionPreview key={id} {...otherscollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  errorMessage: selectErrorMessage,
});
export default connect(mapStateToProps)(CollectionsOverview);
