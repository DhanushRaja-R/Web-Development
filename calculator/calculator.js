let input = document.querySelector('input');
// Function to handle button clicks 
function buttonClick(value) {
    if (value === 'C') {
        input.value = '';
    } else if (value === '←') {
        input.value = input.value.slice(0, -1);
    } 
     else if (value === '=' || value === 'Enter') {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    } else {
        input.value += value;
    }
}