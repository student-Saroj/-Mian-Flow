

let input = '';
let output = '';

const handleNumberClick = (number) => {
    input += number;
    document.getElementById('input').value = input;
};

const handleOperationClick = (operation) => {
    input += operation;
    document.getElementById('input').value = input;
};

const handleEqualsClick = () => {
    try {
        const result = eval(input);
        output = result;
        document.getElementById('output').textContent = output;
        input = '';
        document.getElementById('input').value = '';
    } catch (error) {
        output = 'Error';
        document.getElementById('output').textContent = output;
    }
};

const handleClearClick = () => {
    input = '';
    output = '';
    document.getElementById('input').value = '';
    document.getElementById('output').textContent = '';
};