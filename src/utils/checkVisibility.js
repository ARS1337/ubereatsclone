const checkVisibility = (elem, cb) => {
  let intersectingCount = null;
  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.01,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb(true);
      } else {
        cb(false);
      }
      console.log("intersectingCount ", intersectingCount);
    });
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(elem);
};

export default checkVisibility;
