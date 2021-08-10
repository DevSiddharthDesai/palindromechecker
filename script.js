const btn = document.querySelector('.btn');

const inputText = document.querySelector('.input-text');

const result = document.querySelector('.result');

btn.addEventListener('click',() =>{
    // console.log(inputText.value);
    let reversedInput = inputText.value.split("").reverse().join('');

    if(inputText.value == reversedInput)
    {
        result.innerHTML = inputText.value + " is a palindrome";
    }
    else
    {
        result.innerHTML = inputText.value + " is not a palindrome";
    }
});
