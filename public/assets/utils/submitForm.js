$('.FormSubmit').click(function (e) {
    let id = $(this).attr('form_id');
    e.preventDefault();
    var form = $("#" + id);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form.serialize(),
        dataType: 'JSON',
        success: function (response) {
            if (response.message) {
                messagePop(response.message);
                setInterval(window.location.reload(true), 5000);
            }
            if (response.token) {

            }
        },
        error: function (err) {
            messagePop(err.responseJSON.message, 'error');
        }

    })
})