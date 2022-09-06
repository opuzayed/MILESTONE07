console.log('prompet connected');
const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('ki khobor tipu');
    }
}

//------confirm message----------
const askSomething = () =>{
    const decission = confirm('are you coming today?');
    console.log(decission);
    if(decission === true)
    {
        alert('dosto 500 tk de');
    }
    else{
        alert('ashbo na re');
    }
}

//---------prompt message ---------
const userInfo = () =>{
   const name = prompt('tell us your name');
    console.log(name);
    if(!!name){
        console.log('my name is ', name);
    }
}

//------------add storage click button-----------

document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);
});
//--------remove-item-from-local-storage---------
document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name');
});
//------------clear local storage-------------
document.getElementById('btn-clear').addEventListener('click', function(){
localStorage.clear();
});