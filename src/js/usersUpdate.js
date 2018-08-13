$(function(){
  if ($("#editUserForm").length > 0) {
    // 取回使用者資料
    const params = new URLSearchParams(location.search.slice(1));
    const userId = params.get('user');
    const url = `//localhost:3000/users/${userId}`;
    $.get(url).done((data) => {
      // console.log(data);
      $.each(data, (key, value) => {
        $(`#editUserForm input[name=${key}]`).val(value);
      })
    })

    // 更新使用者資料
    $("#updateUserBtn").on("click", function(e){
      e.preventDefault();
      $.ajax({
        url: `//localhost:3000/users/${userId}`,
        method: 'PATCH',
        data: $("#editUserForm").serialize(),
        dataType: 'json'
      }).done((data) => {
        // console.log(data);
        window.location = 'http://localhost:4000/users/index.html';
      })
    })
  }
})