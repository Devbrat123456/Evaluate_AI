$('.FormSubmit').click(function (e) {
    let id = $(this).attr('form_id');
    e.preventDefault();
    var form = $("#" + id);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

      
     document.getElementById('main-loader').style.display = 'grid';
    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: form.serialize(),
        dataType: 'JSON',
        success: function (response) {
        document.getElementById('main-loader').style.display = 'none';
            if (response.message) {
                messagePop(response.message);
                  if(response.noload)
                  {
                    console.log('noload');
                    getResultOfSession(response.session_id);
                  }else{
                      setInterval(window.location.reload(true), 5000);
                  }
            }
            if (response.token){ 

            }
        },
        error: function (err) {
            messagePop(err.responseJSON.message, 'error');
        }

    })
})

 const getResultOfSession=async(session_id)=>{

                    redirectWithPost(`/chatbox/getResult`,{
                   session_id
                 })
 }

 
function redirectWithPost(url, data) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }
  }
   const input = document.createElement("input");
      input.type = "hidden";
      input.name = "_csrf";
      input.value =$('meta[name="csrf-token"]').attr('content');
      form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
}