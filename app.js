jQuery(document).ready(function () {
    var worker = new Worker('currencies.js');

    worker.onmessage = function (event) {
        var container = jQuery("<ul>");

        var currencies = event.data;

        console.log("Updated !");

        currencies.forEach(function (currency) {
            var currencyDetails = currency.resource.fields;

            var currencyContainer = jQuery("<li>");
            currencyContainer.append('<h1>' + currencyDetails.name + '</h1>');
            currencyContainer.append('Value: <strong>' + currencyDetails.price + '</strong>');

            container.append(currencyContainer);
        });

        jQuery('body').html(container).fadeIn('slow').fadeOut('slow').fadeIn('slow').fadeOut('slow').fadeIn('slow');
    };
});