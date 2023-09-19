import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code === key) {
        action();
      }
    }
    document.addEventListener("keydown", callback);
  }, [key, action]);
}
