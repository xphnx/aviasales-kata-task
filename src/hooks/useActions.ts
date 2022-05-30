import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { FilterActionCreators } from "../store/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(FilterActionCreators, dispatch);
}