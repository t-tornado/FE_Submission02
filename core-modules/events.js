function addEvent(querySelector, event, cb) {
  const element = document.querySelector(querySelector);
  element.addEventListener(event, cb);
}

export { addEvent };
