import { useEffect, useRef, useState } from "react";

function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
   <div
  ref={ref}
  className={`fade-section ${isVisible ? "visible" : ""} w-full`}
>

      {children}
    </div>
  );
}

export default FadeInSection;
