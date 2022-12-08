//1. susikurti JS kintamuosius - gauti reiksmes is input lauku
//visi input
const my_productCode = document.getElementById('productCode');
const my_productName = document.getElementById('productName');
const my_productQuantity = document.getElementById('productQuantity');
const my_find_productCode = document.getElementById('find_productCode');
//visi mygtukai
const my_insertProduct = document.getElementById('insertProduct');
const my_deleteProduct = document.getElementById('deleteProduct');
const my_findProduct = document.getElementById('findProduct');
//resultatus spausdinsiu i table
const my_results = document.getElementById('results');


const table_row = document.createElement('tr');
// table_row.setAttribute('id', 'main_row');
const main_row = document.getElementById('main_row')
my_results.appendChild(table_row)
const table_head1 = document.createElement('th');
table_head1.innerText = `Product Code`
table_row.appendChild(table_head1);
const table_head2 = document.createElement('th');
table_head2.innerText = `Product Name`
table_row.appendChild(table_head2);
const table_head3 = document.createElement('th');
table_head3.innerText = `Product Quantity`
table_row.appendChild(table_head3);


table_row.style.display = 'none';


id_on_the_list = [];



my_insertProduct.addEventListener('click', (e) => {
    e.preventDefault();


    let localObject = {
        productID: '',
        Name: '',
        Quantity: ''
    }

    let newObject_from_local_storage = JSON.parse(window.localStorage.getItem("cart"));

    localObject.productID = my_productCode.value;
    localObject.Name = my_productName.value;
    localObject.Quantity = my_productQuantity.value;
  
    if (newObject_from_local_storage === null) {
      local_storage_array = [];

      local_storage_array.push(localObject);
      localStorage.setItem("cart", JSON.stringify(local_storage_array));

      my_productCode.value = '';
      my_productName.value = '';
      my_productQuantity.value = '';

    } else {

        if (my_productCode.value === '') {
          alert('please fill Product Code field');
        } else if (my_productName.value === '') {
          alert(`please fill Product Name field`);
        } else if (my_productQuantity.value === '') {
          alert(`please fill Product Quantity field`)
        } else if (newObject_from_local_storage.map(e => e.productID).indexOf(my_productCode.value) === -1) {
          newObject_from_local_storage.push(localObject);
          localStorage.setItem("cart", JSON.stringify(newObject_from_local_storage));

          my_productCode.value = '';
          my_productName.value = '';
          my_productQuantity.value = '';

        } else {
          alert('ID already exists!');

          my_productCode.value = '';
          my_productName.value = '';
          my_productQuantity.value = '';
        }

    }

});


my_findProduct.addEventListener('click', (e) => {
  e.preventDefault();
  let newObject_from_local_storage = JSON.parse(window.localStorage.getItem("cart"));
  
  const concurrence = newObject_from_local_storage.some(e => e.productID === my_find_productCode.value);

  if (my_find_productCode.value === '') {
    const concurrence = newObject_from_local_storage.some(e => e.productID === my_find_productCode.value);
    alert('Please enter ID witch you want to find in localstorage');
  } else if (newObject_from_local_storage === null) {
    alert(`Where are no saved ID's in localstorage good sir`);
  } else if (!concurrence) {
    alert(`Where is no such ID saved in localstorage good sir`);
  } else {
    
      if (id_on_the_list.indexOf(my_find_productCode.value) === -1) {
        id_on_the_list.push(my_find_productCode.value);
        const user_data = newObject_from_local_storage.filter(item => item.productID === my_find_productCode.value)
      
        const function_table_data = document.createElement('tr');
        function_table_data.id = `table-row${my_find_productCode.value}`;
        my_results.appendChild(function_table_data);
        const table_data1 = document.createElement('td');
        table_data1.innerText = user_data.map(e => e.productID);
        function_table_data.appendChild(table_data1);
        const table_data2 = document.createElement('td');
        table_data2.innerText = user_data.map(e => e.Name)
        function_table_data.appendChild(table_data2);
        const table_data3 = document.createElement('td');
        table_data3.innerText = user_data.map(e => e.Quantity);
        function_table_data.appendChild(table_data3);


        if (my_results.children[1] === undefined) {
          table_row.style.display = 'none';
        } else {
          table_row.style.display = '';
        }

      } else {
        alert(`ID is already on the list!`);
      }

    }
      
    my_find_productCode.value = '';

})


my_deleteProduct.addEventListener('click', (e) => {
  e.preventDefault();

  const getLocalStorage = JSON.parse(window.localStorage.getItem("cart"));
  const delete_is_true = getLocalStorage.map(e => e.productID).indexOf(my_productCode.value)
    
   if (!(my_productCode.value === '')) {
      if (delete_is_true === -1) {
        alert(`where is no such id in local storage to delete good sir!`)
      } else {
        let remove_item = JSON.parse(window.localStorage.getItem("cart"));
        const filtered = remove_item.filter(item => item.productID !== my_productCode.value);
        localStorage.setItem('cart', JSON.stringify(filtered));
        alert(`You have removed one product witch ID is ${my_productCode.value}, have a good day sir!`);
      
      }

    const deleteRow = document.getElementById(`table-row${my_productCode.value}`);

    if (deleteRow) {
      deleteRow.remove();
    }
    
    for( let i = 0; i < id_on_the_list.length; i++){ 
    
      if (id_on_the_list[i] === my_productCode.value) { 
  
        id_on_the_list.splice(i, 1); 
      }
    
  
  }

    if (my_results.children[1] === undefined) {
      table_row.style.display = 'none';
    } else {
      table_row.style.display = '';
    }


   } else {
     alert(`Please good sir enter the ID of the good which you want to delete`);
   }
    
   my_productCode.value = '';

})






























































































