import { useCallback, useContext } from 'react';
import { AppContext, AppActionTypes } from '../contexts/App';

const useAppContext = () => {
  const { jsonBinTree, fileInputValue, dispatch } = useContext(AppContext);

  const setBinTree = useCallback(
    (tree) => {
      dispatch({ type: AppActionTypes.SET_JSON_TREE, payload: tree });
    },
    [dispatch]
  );

  const setFileInput = useCallback(
    (input) => {
      dispatch({ type: AppActionTypes.SET_FILE_VALUE, payload: input });
    },
    [dispatch]
  );

  return { jsonBinTree, fileInputValue, setBinTree, setFileInput };
};

export default useAppContext;