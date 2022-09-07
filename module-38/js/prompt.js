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

//-----------add product item-----------
const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addProduct = () =>{
    const productName = getInputValueById('product-name-field');
    const quantity =    getInputValueById('product-quantity-field');
    console.log(productName, quantity);
    //--------DISPLAY PRODUCTS ON UI--------
    displayProducts(productName, quantity);
    //set to local storage
    //simple way
    localStorage.setItem(productName, quantity);
}

const displayProducts = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}