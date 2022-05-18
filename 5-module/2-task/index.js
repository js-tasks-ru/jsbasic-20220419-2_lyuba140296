function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  button.onclick = function () {
    document.querySelector('#text').toggleAttribute('hidden');
  }
}
