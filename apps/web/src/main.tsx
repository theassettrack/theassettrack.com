import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import Loader from "./components/loader";
import { routeTree } from "./routeTree.gen";
import "./lib/i18n"; // Initialize i18n


const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: () => <Loader />,
  context: {},
  });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Handle 404 redirects for GitHub Pages
if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('p');
  if (redirect) {
    // Remove the query parameter and navigate to the intended path
    window.history.replaceState(null, '', redirect);
  }
}

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Root element not found");
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
