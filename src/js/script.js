 let userInput = document.getElementById('input');
 userInput.value = localStorage.getItem('userText') || 'Please try again';
 
 // OnInput
 userInput.oninput = () => {
    console.log(`${localStorage['userText']}`);
    localStorage.setItem('userText', userInput.value);
}


 // OnClick
 let deleteButton = document.getElementById('delete');
 deleteButton.onclick = clearContent;

 function clearContent() {
    localStorage.removeItem('userText');
    userInput.value = 'Enter your text here';
}