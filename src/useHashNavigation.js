import { useLayoutEffect } from "react";

// Resolve section links after React has mounted their targets, including direct visits.
export default function useHashNavigation() {
  useLayoutEffect(() => {
    let active = true;
    const scrollToHash = () => {
      let id;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    };

    const settleInitialAnchor = () => {
      document.fonts.ready.then(() => {
        if (active) scrollToHash();
      });
    };

    scrollToHash();
    if (document.readyState === "complete") settleInitialAnchor();
    else window.addEventListener("load", settleInitialAnchor, { once: true });
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      active = false;
      window.removeEventListener("load", settleInitialAnchor);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
}
