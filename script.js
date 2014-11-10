jQuery(document).ready(function () {
    var url = 'http://restful-example.appspot.com';

    var fetchStudents = function () {
        var request = jQuery.ajax({
            type: 'GET',
            url: url + '/students',
            dataType: 'json'

        });

        request.done(function (data) {
            var jQuerycontainer = jQuery('<ul>');

            data['student'].forEach(function (student) {
                var jQuerystudentContainer = jQuery('<li>');
                var jQuerystudent = jQuery('<h1>' + student.firstName + '</h1>');
                var jQuerydeleteStudent = jQuery('<a>Delete !</a>');

                jQuerydeleteStudent.on('click', function (event) {
                    event.preventDefault();
                    var request = jQuery.ajax({
                        type: 'DELETE',
                        url: url + '/students/' + student.idBooster,
                        dataType: 'json'
                    });

                    jQuerystudentContainer.fadeOut();
                });

                jQuerystudentContainer.append(jQuerystudent);
                jQuerystudentContainer.append(jQuerydeleteStudent);


                jQuerycontainer.append(jQuerystudentContainer);
            });

            jQuery('#students').html(jQuerycontainer);
        });

        setTimeout(fetchStudents, 5000);
    };

    fetchStudents();

    jQuery('#studentForm').on('submit', function (event) {
        event.preventDefault();

        var request = jQuery.ajax({
            type: 'POST',
            url: url + '/students',
            dataType: 'json',
            data: jQuery('#studentForm').serialize(),
            contentType: 'application/json'
        });

        request.done(function (data, textStatus) {
            jQuery("#birthDate").val("");
            jQuery("#idBooster").val("");
            jQuery("#firstName").val("");
            jQuery("#lastName").val("");
        });

    });
});