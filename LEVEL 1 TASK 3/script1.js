document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = calculate(previousInput, operator, currentInput);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, op, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return '';
        }
    }
});
