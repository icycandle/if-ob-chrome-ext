const helloElements = document.querySelectorAll<HTMLElement>('.hello');
helloElements.forEach((element) => {
  element.style.display = 'none';
});
