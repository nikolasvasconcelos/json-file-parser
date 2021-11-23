import { useCallback, useContext } from 'react';
import { AppContext, AppActionTypes } from '../contexts/App';

const useAppContext = () => {
  const { jsonBinTree, dispatch } = useContext(AppContext);

  const setBinTree = useCallback(
    (tree) => {
      dispatch({ type: AppActionTypes.SET_JSON_TREE, payload: tree });
    },
    [dispatch]
  );

  return { jsonBinTree, setBinTree };
};

export default useAppContext;