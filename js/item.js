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
    imgElement.title = decodeURIComponent(params.title); // Добавление атрибута title
    itemElement.appendChild(imgElement);

    var productTextElement = document.createElement("div"); // Контейнер для всех надписей
    productTextElement.className = "product-text";

    var titleElement = document.createElement("h2");
    titleElement.textContent = decodeURIComponent(params.title);
    productTextElement.appendChild(titleElement);

    var priceElement = document.createElement("p");
    priceElement.className = "price";
    priceElement.textContent = "Цена: " + decodeURIComponent(params.price);
    productTextElement.appendChild(priceElement);

    var discountPriceElement = document.createElement("p");
    discountPriceElement.className = "discount-price";
    discountPriceElement.textContent = "Цена со скидкой: " + decodeURIComponent(params.discountPrice);
    productTextElement.appendChild(discountPriceElement);

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