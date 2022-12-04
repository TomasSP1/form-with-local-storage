const insertBtn = document.querySelector('.insertBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const getDataBtn = document.querySelector('.dataBtn');
const product_code_input = document.querySelector('#product-code-input');
const product_name_input = document.querySelector('#product-name-input');
const product_quantity_input = document.querySelector('#product-quantity');
const product_get_data_input = document.querySelector('#product-get-data-input')


let local_storage_array = [];


insertBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let localObject = {
        productID: '',
        Name: '',
        Quantity: ''
    }

    localObject.productID = product_code_input.value;
    localObject.Name = product_name_input.value;
    localObject.Quantity = product_quantity_input.value;
    local_storage_array.push(localObject)

    localStorage.setItem("cart", JSON.stringify(local_storage_array));

    // console.log(localObject);
    // console.log(local_storage_array)
});


deleteBtn.addEventListener('click', () => {
    localStorage.clear();
    alert('localstorage has been cleared, have a good day sir!')
})

getDataBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newObject_from_local_storage = JSON.parse(window.localStorage.getItem("cart"));
    // console.log(newObject_from_local_storage)
    // if(product_get_data_input.value === )
    for (let i in newObject_from_local_storage) {
        // console.log(newObject_from_local_storage[i])
        if (newObject_from_local_storage[i].productID === product_get_data_input.value) {
            console.log(`
            productID: ${newObject_from_local_storage[i].productID}, 
            Name: ${newObject_from_local_storage[i].Name}, 
            Quantity: ${newObject_from_local_storage[i].Quantity}
            `)
         } 
        //  else {
        // //     alert('productID nor found');
        // // }
            
    }
})








