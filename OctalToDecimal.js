const input=document.querySelector('#input');
const output=document.querySelector('#output');

const button=document.querySelector('#convert-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  output.value = "";
  input.value = "";
});

button.addEventListener('click',()=>{
  output.value=parseInt(input.value,8).toString(10);
});