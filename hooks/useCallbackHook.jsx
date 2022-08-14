import { useState, useRef, useEffect } from "react";

export default function useStateWithCallback(initialState) {
  const [state, setState] = useState(initialState);

  const callbackRef = useRef(null);

  const setStateCallback = (state, callback) => {
    callbackRef.current = callback; // store passed callback to ref
    setState(state);
  };

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
      callbackRef.current = null; // reset callback
    }
  }, [state]);

  return [state, setStateCallback];
}