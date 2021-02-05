const input=document.querySelector('#input');
const output=document.querySelector('#output');

const button=document.querySelector('#convert-button');

button.addEventListener('click',()=>{
  output.value=parseInt(input.value,2).toString(8);
});