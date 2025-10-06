import { setGlobalHash } from "../hooks/useCurrentHash";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => setGlobalHash("/#home"), 800);
};
