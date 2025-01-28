import { useEffect } from "react";

const useScrollAnimation = (selectors) => {
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight - 150 && rect.bottom >= 0;
  };

  const checkVisibility = () => {
    selectors.forEach(({ className, style }) => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((element) => {
        if (isInViewport(element)) {
          Object.keys(style).forEach((key) => {
            element.style[key] = style[key];
          });
        }
      });
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [selectors]);
};

export default useScrollAnimation;