// Получение параметров URL
function getURLParams() {
  var params = {};
  var url = new URL(window.location.href);
  var searchParams = new URLSearchParams(url.search);
  searchParams.forEach(function(value, key) {
    params[key] = value;
  });
  return params;
}

// Создание элемента товара на странице
function createProductItems() {
  var params = getURLParams();
  var catalog = document.getElementById("catalog");

  if (Object.keys(params).length > 0) {
    var itemElement = document.createElement("div");
    itemElement.className = "item";

    var imgElement = document.createElement("img");
    imgElement.src = decodeURIComponent(params.img);
    itemElement.appendChild(imgElement);

    var productTextElement = document.createElement("div"); // Контейнер для всех надписей
    productTextElement.className = "product-text";

    var nameElement = document.createElement("h2");
    nameElement.textContent = decodeURIComponent(params.name);
    productTextElement.appendChild(nameElement);

    var priceElement = document.createElement("p");
    priceElement.className = "price";
    priceElement.textContent = "Цена: " + decodeURIComponent(params.price); 
    productTextElement.appendChild(priceElement);

    var discountPriceElement = document.createElement("p");
    discountPriceElement.className = "discount-price";
    discountPriceElement.textContent = "Цена со скидкой: " + decodeURIComponent(params.discountPrice);
    productTextElement.appendChild(discountPriceElement);

    var titleElement = document.createElement("p");
    titleElement.textContent = decodeURIComponent(params.title);
    productTextElement.appendChild(titleElement);

    itemElement.appendChild(productTextElement);

    catalog.appendChild(itemElement);
  } else {
    // Обработка случая, когда параметры отсутствуют
    var noItemElement = document.createElement("p");
    noItemElement.textContent = "Нет информации о товаре.";
    catalog.appendChild(noItemElement);
  }
}

// Создание элементов товаров при загрузке страницы
window.onload = function() {
  createProductItems();
};