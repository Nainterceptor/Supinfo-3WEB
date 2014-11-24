jQuery(document).ready(function () {
    jQuery(document).on('pageshow', '#flux', function () {
        jQuery.mobile.loading("show");

        var url = window.location.search.split('?url=');
        url = url[url.length - 1];

        var list = jQuery("#flux ul[data-role='listview']");
        list.html("");

        jQuery.get(url, function (data) {
            var title = jQuery(jQuery(data).find('title')[0]).text();
            jQuery("#flux div[data-role='header'] h1").html(title);

            jQuery(data).find("item").each(function () {
                var xmlElement = jQuery(this);
                var listElement = jQuery('<li><a href="' + xmlElement.find('link').text() + '">' + xmlElement.find('title').text() + '</a></li>');
                list.append(listElement);
            });

            list.listview('refresh');
            jQuery.mobile.loading("hide");
        });
    });
});