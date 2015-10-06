// $(document).ready(function() {
//     $('#letterform').submit(function(event) {
//         var nameInput = $("input#name").val();
//
//         $('.name').text(nameInput.toUpperCase());
//
//         $('#letter').show();
//
//         event.preventDefault();
//     });
// });

$(document).ready(function() {
    $('#infoform').submit(function(event) {
        var full_nameInput = $("input#full_name").val();
        $(.full_name).text(full_nameInput.toUpperCgase());
        $('#receipt').show();
        event.preventDefault();

    });
});
