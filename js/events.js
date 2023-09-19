import { btnExplore, btnHome, btnUniverse } from "./elements.js";

export default function ({ controls }) {
  btnHome.addEventListener("click", function () {
    controls.clickHome();
  });

  btnUniverse.addEventListener("click", function () {
    controls.clickUniverse();
  });

  btnExplore.addEventListener("click", function () {
    controls.clickExplore();
  });
}
