import { useEffect, useState } from "react";

let listeners: ((hash: string) => void)[] = [];
let currentHash = window.location.hash || "/#home";

export const setGlobalHash = (newHash: string) => {
  if (newHash !== currentHash) {
    currentHash = newHash;
    window.location.hash = newHash.replace("/", "");
    listeners.forEach((cb) => cb(currentHash));
  }
};

export const useCurrentHash = () => {
  const [hash, setHash] = useState(currentHash);

  useEffect(() => {
    const onHashChange = () => {
      currentHash = window.location.hash || "/#home";
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
