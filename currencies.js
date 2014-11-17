var stockURL = 'stock.php';

var fetchCurrencies = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            self.postMessage(response.list.resources);
        }
    };
    xhr.open('GET', stockURL, true);
    xhr.send();

    setTimeout(fetchCurrencies, 30000);
};

fetchCurrencies();