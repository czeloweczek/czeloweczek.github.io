// Получение данных из XML
function loadXMLData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      parseXMLData(this);
    }
  };
  xhttp.open("GET", "mmm.xml", true); // Замените "catalog.xml" на путь к вашему XML-файлу
  xhttp.send();
}

// Обработка данных из XML
function parseXMLData(xml) {
  var xmlDoc = xml.responseXML;
  var items = xmlDoc.getElementsByTagName("item");

  var catalog = document.getElementById("catalog");

  for (var i = 0; i < items.length; i++) {
    (function() {
      var item = items[i];
      var imgElement = item.getElementsByTagName("img")[0];
      var imgSrc = imgElement && imgElement.textContent;
      var nameElement = item.getElementsByTagName("name")[0];
      var title = nameElement && nameElement.textContent;
      var price = item.getElementsByTagName("price")[0].textContent;
      var discountPrice = item.getElementsByTagName("discount-price")[0].textContent;

      var itemElement = document.createElement("div");
      itemElement.className = "item";

      var imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      itemElement.appendChild(imgElement);

      var titleElement = document.createElement("h2");
      titleElement.textContent = title;
      itemElement.appendChild(titleElement);

      var priceElement = document.createElement("p");
      priceElement.className = "price";
      priceElement.textContent = "Цена: " + price;
      itemElement.appendChild(priceElement);

      var discountPriceElement = document.createElement("p");
      discountPriceElement.className = "discount-price";
      discountPriceElement.textContent = "Цена со скидкой: " + discountPrice;
      itemElement.appendChild(discountPriceElement);

      itemElement.addEventListener("click", function() {
        // Переход на другую страницу и передача параметров товара через URL
        var url = "item.html?img=" + encodeURIComponent(imgSrc) + "&title=" + encodeURIComponent(title) + "&price=" + encodeURIComponent(price) + "&discountPrice=" + encodeURIComponent(discountPrice);
        window.location.href = url;
      });

      catalog.appendChild(itemElement);
    })();
  }
}

// Загрузка данных при загрузке страницы
window.onload = function() {
  loadXMLData();
};