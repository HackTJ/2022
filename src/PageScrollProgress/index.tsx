import { useRef, useCallback, useEffect } from "react";

import styles from "./pagescrollprogress.module.css";

const PageScrollProgress = () => {
  const progressBarEl = useRef<HTMLDivElement>(null!);

  const getDocHeight = (): number =>
    Math.max(
      document.body?.scrollHeight ?? 0,
      document.documentElement?.scrollHeight ?? 0,
      document.body?.offsetHeight ?? 0,
      document.documentElement?.offsetHeight ?? 0,
      document.body?.clientHeight ?? 0,
      document.documentElement?.clientHeight ?? 0
    );

  const calculateScrollDistance = useCallback(() => {
    const scrollTop: number = window.pageYOffset; // how much the user has scrolled by
    const winHeight: number = window.innerHeight;
    const docHeight: number = getDocHeight();

    const totalDocScrollLength: number = docHeight - winHeight;
    const currentScrollPostion: number =
      (scrollTop / totalDocScrollLength) * 100;

    progressBarEl.current.style.setProperty(
      "--scroll-position",
      `${currentScrollPostion}%`
    );

    return currentScrollPostion;
  }, []);

  const scrollEvent = useCallback(() => {
    requestAnimationFrame(calculateScrollDistance);
  }, [calculateScrollDistance]);

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return <div className={styles.progress} ref={progressBarEl}></div>;
};

export default PageScrollProgress;
