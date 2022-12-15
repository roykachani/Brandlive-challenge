/*Please prepare a JavaScript script that will create an object, where, after entering the product page (any online store), 
it will save its configuration (url, photo, name, prices, etc.) in the localStorage browser memory. 
There may be several products in this this object, 
depending on how many products the user visits.*/

/*

visit the Page to run the script ---> https://www.venex.com.ar/

*/

function saveProductInfo() {
  let productsVisited = JSON.parse(localStorage.getItem('productInfo')) || {};
  //   console.log(productInfo); //products in localStorage

  // Get the product URL, photo, name, prices, model,description
  const url = window.location.href;

  const element = window.document;

  const product = element.querySelector('h1.tituloProducto').innerText || null;
  const model =
    element.querySelector('div.sub-title-product').innerText || null;
  const promotionalPrice =
    element.querySelector('div.textPrecio').innerText || null;
  const listPrice = element.querySelector('div.priceList').innerText || null;
  const photo =
    element
      .querySelector(`div.img-container[data-gallery="#blueimp-gallery"]`)
      .getAttribute('data-href') || null;
  const description =
    element.querySelector(`div#wc-power-page`).innerHTML || null;

  if (!product) return;
  else {
    // Add the product information to the object
    productsVisited[product] = {
      url,
      product,
      model,
      description, //description returns an HTML to parse
      promotionalPrice,
      listPrice,
      photo,
    };

    // console.log(productInfo[product]); //product
    // Save the object in localStorage
    return localStorage.setItem('productInfo', JSON.stringify(productsVisited));
  }
}
