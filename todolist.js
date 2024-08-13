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

    document.getElementById("product").value="";
    document.getElementById("productCat").value="Selecg Category";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";
}
