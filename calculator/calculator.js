const input = document.querySelector('.Calculationbox');
const buttons = document.querySelectorAll('button');

let expression = '';
function handleClickEvent(event) {
    const value = event.target.getAttribute('data-value');

    switch (value) {
        case 'AC':
            expression = '';
            break;
        case 'DEL':
            expression = expression.slice(0, -1);
            break;
        case '=':
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
            break;
        case '_':
            expression += '-';
            break;
        default:
            expression += value;
    }

    input.value = expression;
}
buttons.forEach(button => {
    button.addEventListener('click', handleClickEvent);
});
