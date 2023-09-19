export default function Controls({ imgHome, imgUniverse, imgExplore }) {
  function clickHome() {
    imgHome.classList.remove("hide");
    imgUniverse.classList.add("hide");
    imgExplore.classList.add("hide");
  }

  function clickUniverse() {
    imgHome.classList.add("hide");
    imgUniverse.classList.remove("hide");
    imgExplore.classList.add("hide");
  }

  function clickExplore() {
    imgHome.classList.add("hide");
    imgUniverse.classList.add("hide");
    imgExplore.classList.remove("hide");
  }

  return {
    clickHome,
    clickUniverse,
    clickExplore,
  };
}
