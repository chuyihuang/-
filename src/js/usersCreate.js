$(function() {
  $("#createUserBtn").on("click", function(e){
    e.preventDefault();
    $.ajax({
      url: '//localhost:3000/users',
      method: 'POST',
      data: $("#newUserForm").serialize(),
      dataType: 'json'
    }).done((data) => {
      // console.log(data);
      window.location = 'http://localhost:4000/users/index.html';
    })
  })
})