import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const usePagePoints = () => {
  const [points, setPoints] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updatePoints = () => {
      if (typeof window !== "undefined") {
        const visitedPages =
          JSON.parse(window.localStorage.getItem("visitedPages")) || {};
        const testedPages =
          JSON.parse(window.localStorage.getItem("testedPages")) || {};
        const visitedPagesCount = Object.keys(visitedPages).length;
        const testedPagesCount = Object.keys(testedPages).length;
        setPoints((visitedPagesCount + testedPagesCount) * 10);
      }
    };

    updatePoints();

    const storageListener = () => {
      updatePoints();
    };

    window.addEventListener("storage", storageListener);

    return () => {
      window.removeEventListener("storage", storageListener);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (
        url.startsWith("/lp/") ||
        url.startsWith("/react/") ||
        url.startsWith("/diary/") ||
        url.startsWith("/setup/")
      ) {
        if (typeof window !== "undefined") {
          const visitedPages =
            JSON.parse(window.localStorage.getItem("visitedPages")) || {};
          visitedPages[url] = true;
          window.localStorage.setItem(
            "visitedPages",
            JSON.stringify(visitedPages)
          );
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return points;
};

export default usePagePoints;
