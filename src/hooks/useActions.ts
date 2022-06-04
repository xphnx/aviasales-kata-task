// import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allActionCreators } from '../store/action-creators';
import { useDispatch } from 'react-redux';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
