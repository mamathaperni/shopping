const mainDiv =document.getElementById("main");

function mystoreAPI(){
    fetch ('https://fakestoreapi.com/products')
    .then ((res) => res.json())
    .then ((data) =>displayData(data))
    .catch((err) =>console.log(err));

}

mystoreAPI();
function displayData(arr){
    arr.forEach((item) => {
         proDiv = document.createElement('div');
         proDiv.classList.add('products');

         image =document .createElement('img');
         image.src=item .image;

         heading=document.createElement('h2');
         heading.innerHTML=item.title;

         price=document.createElement('p');
         price.innerHTML='₹'+item.price;

         proDiv.append(image,heading,price);

         mainDiv.appendChild(proDiv);

    });
}