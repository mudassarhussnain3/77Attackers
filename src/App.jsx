import { Component, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Loader from "./components/layout/Loader.jsx";
import Chatbot from "./components/chatbot/Chatbot.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import { ROUTES } from "./router/routes.js";

// ponytail: lazy route chunks can fail to load (stale build, flaky network) and
// crash the whole tree with a blank screen; reload once automatically, then
// fall back to a manual retry so a persistent error doesn't reload-loop forever.
class RouteErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidMount() {
    sessionStorage.removeItem("route-error-reload");
  }

  componentDidCatch() {
    const key = "route-error-reload";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
          <p>Something went wrong loading this page.</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <Header />
      <main style={{ paddingTop: "4.5rem" }}>
        <RouteErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              {ROUTES.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
      <Chatbot />
    </BrowserRouter>
  );
}
