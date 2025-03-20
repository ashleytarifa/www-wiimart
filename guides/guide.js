const buttons = document.querySelectorAll('.button-image');
const text = document.querySelectorAll('.text-guide');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    if (text[index].classList.contains('active')) {
      text[index].classList.remove('active');
    } else {

      text.forEach(text => text.classList.remove('active'));

      text[index].classList.add('active');
    }
  });
});
