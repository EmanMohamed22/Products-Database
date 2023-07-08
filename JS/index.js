
var productName = document.getElementById("ProductName");
var productPrice = document.getElementById("ProductPrice");
var productCategory = document.getElementById("ProductCategory");
var productDesc = document.getElementById("ProductDesc");
var products = [];
var mainIndex = 0;

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
  displayProducts()
}
function addProduct() {
 var product = {
  name : productName.value,
  price : productPrice.value,
  category : productCategory.value,
  desc : productDesc.value
 }
 if (document.getElementById("up").innerHTML == "Add Product") {
  products.push(product);
 }else{
   products.splice(mainIndex,1,product)
  
 }
 
 
 localStorage.setItem("products",JSON.stringify(products))
displayProducts()
clear()
}

function displayProducts() {
  var trs ="";
  for (var i = 0; i < products.length; i++) {
     trs += `<tr>
            <td>${i}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].desc}</td>
            <td><button onclick = "updateProduct(${i})"  type="submit" class="btn btn-warning ">Update</button></td>
            <td><button onclick ="deleteProduct(${i})" type="submit" class="btn btn-warning ">Delete</button></td>
        </tr>` 
    
  }
  document.getElementById("tableBody").innerHTML = trs
  console.log(trs)
}
function clear() {
  productName.value = ""
  productPrice.value = ""
  productCategory.value = ""
  productDesc.value = ""
}

function deleteProduct(index) {
  products.splice(index,1)
  localStorage.setItem("products",JSON.stringify(products))
  displayProducts()
}

function updateProduct(index) {
  mainIndex = index
  productName.value = products[index].name
  productPrice.value = products[index].price
  productCategory.value = products[index].category
  productDesc.value = products[index].desc

  document.getElementById("up").innerHTML = "Update Product"
}
function searchInput(term) {
  var trs = "";
  for (var i  = 0; i < products.length; i++) {  
   
         if (products[i].name.toLowerCase().includes(term.toLowerCase())) {
           trs += `<tr>
           <td>${i}</td>
           <td>${products[i].name.replace(term,'<span>'+term+'</span>')}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
             <td>${products[i].desc}</td>
             <td><button onclick = "updateProduct(${i})"  type="submit" class="btn btn-warning ">Update</button></td>
             <td><button onclick ="deleteProduct(${i})" type="submit" class="btn btn-warning ">Delete</button></td>
             </tr>` 
         }
       
     }
     document.getElementById("tableBody").innerHTML = trs
    
}


 