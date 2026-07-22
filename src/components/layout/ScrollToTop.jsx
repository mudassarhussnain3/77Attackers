import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle.js";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useDocumentTitle();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
