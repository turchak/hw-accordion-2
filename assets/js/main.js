(() => {
  const acc = document.querySelectorAll('.accordion');
  acc.forEach(item => {
    item.onclick = () => {
      item.nextElementSibling.classList.toggle('open');
    };
  });
})();
