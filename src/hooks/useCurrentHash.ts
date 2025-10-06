import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

let listeners: ((hash: string) => void)[] = [];
let currentHash = normalizeHash(window.location.hash || "#home");
let lenisInstance: Lenis | null = null;

function normalizeHash(h: string) {
  return h.startsWith("#") ? h : `#${h.replace(/^\/?#?/, "")}`;
}
// Function to set the global Lenis instance
export const setGlobalLenisInstance = (lenis: Lenis) => {
  lenisInstance = lenis;
};

// Global function to update the active hash from the scroll observer
export const setScrollActiveHash = (newHash: string) => {
  const normalized = normalizeHash(newHash);
  if (normalized !== currentHash) {
    currentHash = normalized;
    // Optionally update the URL here silently if you want the URL to track scroll position
    // window.history.replaceState(null, '', normalized); // Use this for silent URL update
    listeners.forEach((cb) => cb(currentHash));
  }
};
export const setGlobalHash = (newHash: string) => {
  const normalized = normalizeHash(newHash);

  // Include Lenis scroll logic here
  if (normalized !== currentHash) {
    const targetElement = document.querySelector(normalized);

    if (targetElement instanceof HTMLElement && lenisInstance) {
      // 1. Initiate Lenis scroll
      lenisInstance.scrollTo(targetElement, {
        duration: 1,
        easing: (t) => t,
        offset: -100,
      });
      // 2. Update the hash immediately after initiating scroll
      // This will trigger the hashchange event and update currentHash
      window.location.hash = normalized;

      // DO NOT update currentHash or trigger listeners directly here,
      // let the 'hashchange' listener handle it to keep state flow clean.
      return; // Exit as the hashchange listener will complete the cycle
    }

    // Fallback for when Lenis isn't ready or target not found (optional)
    currentHash = normalized;
    listeners.forEach((cb) => cb(currentHash));
  }
};

export const useCurrentHash = () => {
  const [hash, setHash] = useState(currentHash);

  useEffect(() => {
    const onHashChange = () => {
      currentHash = normalizeHash(window.location.hash || "#home");
      setHash(currentHash);
      listeners.forEach((cb) => cb(currentHash));
    };

    listeners.push(setHash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      listeners = listeners.filter((l) => l !== setHash);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return { hash, setHash: setGlobalHash };
};
