// Write your code here...
document.addEventListener("DOMContentloaded", getMenuItem())

  //send get fetch to json
  //foreach item append

  function getMenuItem() 
  {
    return fetch("http://localhost:3000/menu")
      .then((resp) => resp.json())
      .then((menuItem) => 
      {
        showDescription(menuItem[0]);
        menuItem.forEach((element) => 
        {
            const span = document.createElement("span");
            span.textContent = element.name;
            span.id=element.id;
            span.addEventListener('click', (e)=>showDescription(element))
            document.querySelector("#menu-items").appendChild(span)
        });
        document.querySelector("#cart-form").addEventListener('submit', (e)=>
        {
          e.preventDefault();
          //handleSubmit(menuItem[]);
        });
      });
  }

  function showDescription(menuItem) 
  {
    document.querySelector("#dish-image").src = menuItem.image;
    document.querySelector("#dish-name").textContent = menuItem.name;
    document.querySelector("#dish-description").textContent = menuItem.description;
    document.querySelector("#dish-price").textContent = `$${menuItem.price}`;
    document.querySelector('#number-in-cart').textContent=menuItem.number_in_bag;
    // document.querySelector('#number-in-cart').removeAttribute('class');
    // document.querySelector('#number-in-cart').classList.add=menuItem.id;
  }


function handleSubmit(menuItem)
{
  document.querySelector('#number-in-cart').textContent=parseInt(document.querySelector('#number-in-cart').textContent)+parseInt(document.querySelector('#cart-amount').value);
  console.log(menuItem)
}

  // return fetch("http://localhost:3000/menu/", 
  // {
  //     method: 'PATCH',
  //     headers:
  //     {
  //         "Content-Type":'application/json',
  //         "Accept": "applications/json"
  //     },
  //     body:JSON.stringify()
  // })

   //

  