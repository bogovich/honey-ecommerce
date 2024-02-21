import {useState, useEffect} from "react";

export const useShowOverlay = (show = false) => {
  const [showOverlay, setShowOverlay] = useState(show);

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showOverlay]);

  return [showOverlay, setShowOverlay];
}