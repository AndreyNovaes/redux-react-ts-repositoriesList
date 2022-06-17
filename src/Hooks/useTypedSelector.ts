import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../stateRedux";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
