function expense(){
    const productName = document.getElementById("product").value.trim();
    const productCategory = document.getElementById("productCat").value.trim();
    const productAmount = document.getElementById("amount").value.trim();
    const date = document.getElementById("date").value.trim();

    const allInput = [date,productName, productCategory, productAmount];
    if (!productName || !productCategory || !productAmount || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const list = document.getElementById('data');

    const li = document.createElement('li');

    const dateElem = document.createElement('h2');
    dateElem.textContent = date;
    li.appendChild(dateElem);
    
    // const breakElem = document.createElement('br');
    // li.appendChild(breakElem);

    const h = document.createElement('h2');
    h.textContent = "Product:    " + productName+"  "+"Category:  " +productCategory+ " ₹ "+productAmount;

    const dltbtn = document.createElement('button');
    dltbtn.textContent = 'Delete';
    dltbtn.className = 'delete-btn'; 
    dltbtn.onclick = () => li.remove();

    li.appendChild(h);
    li.appendChild(dltbtn);
    list.appendChild(li);

    allInput.value ='';
    allInput.focus();
}




// function addTask() {
            
//     const input1 = document.getElementById('todo-input').value.trim();
//     const input2 = document.getElementById('todo-input2').value.trim();
//     const input = [input1, input2];
//     // const taskText = input.value.trim();
//     // if (taskText === '') return;
    

//     const list = document.getElementById('todo-list');

//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     p.textContent = input;
    

//     const button = document.createElement('button');
//     button.textContent = 'Delete';
//     button.onclick = () => li.remove();

//     li.appendChild(p);
//     li.appendChild(button);
//     list.appendChild(li);

//     input.value = '';
//     input.focus();
// }