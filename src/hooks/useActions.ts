import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { allActionCreators } from '../store/action-creators';

type bindActionCreatorsType = ReturnType<typeof bindActionCreators>;

export const useActions = (): bindActionCreatorsType => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
