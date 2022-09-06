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