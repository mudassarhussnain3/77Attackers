import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../router/routes.js";

export default function useDocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = ROUTES.find((r) => r.path === pathname);
    document.title = route ? `77 Attackers — ${route.title}` : "77 Attackers";
  }, [pathname]);
}
