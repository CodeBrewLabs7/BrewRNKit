/* eslint-disable */
import type { RootState, AppDispatch } from "./store";

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

// Type safe hooks
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch: () => AppDispatch = useReduxDispatch;
