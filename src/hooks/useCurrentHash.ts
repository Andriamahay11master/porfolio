import { useEffect, useState } from "react";

let listeners: ((hash: string) => void)[] = [];
let currentHash = normalizeHash(window.location.hash || "#home");

function normalizeHash(h: string) {
  return h.startsWith("#") ? h : `#${h.replace(/^\/?#?/, "")}`;
}

export const setGlobalHash = (newHash: string) => {
  const normalized = normalizeHash(newHash);
  if (normalized !== currentHash) {
    currentHash = normalized;
    window.location.hash = normalized; // keeps browser URL in sync
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
