$(function() {

  $("#newUserForm").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true
      },
      "birthday": {
        required: true
      }
    },
    messages: {
      "name": {
        required: "請勿空白！"
      },
      "email": {
        required: "請勿空白！",
        email: "請使用Email格式"
      },
      "birthday": {
        required: "請勿空白！"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        url: '//localhost:3000/users',
        method: 'POST',
        data: $(form).serialize(),
        dataType: 'json'
      }).done((data) => {
        let message = '資料建立成功！';
        window.location = `http://localhost:4000/users/index.html?alert=${message}`;
      })
    }
  })

  // $("#createUserBtn").on("click", function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     url: '//localhost:3000/users',
  //     method: 'POST',
  //     data: $("#newUserForm").serialize(),
  //     dataType: 'json'
  //   }).done((data) => {
  //     let message = '資料建立成功！';
  //     window.location = `http://localhost:4000/users/index.html?alert=${message}`;
  //   })
  // })
})