import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./views/Landing";
import Engineering from "./views/Engineering";
import Acting from "./views/Acting";

const routes = { "/engineering": Engineering, "/acting": Acting };
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const View = routes[path] ?? Landing;

createRoot(document.getElementById("root")).render(<View />);
