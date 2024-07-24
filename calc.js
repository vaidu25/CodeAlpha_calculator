const input = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    switch (buttonText) {
      case '=':
        string = eval(string);
        break;
      case 'AC':
        string = '';
        break;
      case 'DEL':
        string = string.slice(0, -1);
        break;
      default:
        string += buttonText;
    }

    input.value = string;
  });
});