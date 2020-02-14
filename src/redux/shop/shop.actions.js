import { ShopActionsTypes } from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFail = errorMessage => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());

    const collectionRef = firestore.collection('collections');
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFail(error.message)));
  };
};
