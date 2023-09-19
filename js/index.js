import { Router } from "./router.js";
import {
  btnExplore,
  btnHome,
  btnUniverse,
  imgExplore,
  imgHome,
  imgUniverse,
} from "./elements.js";
import Controls from "./controls.js";
import Events from "./events.js";

const router = new Router();
router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/explore", "./pages/explore.html");
router.add(404, "./pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const controls = Controls({
  btnHome,
  btnExplore,
  btnUniverse,
  imgHome,
  imgUniverse,
  imgExplore,
});

Events({ controls });
