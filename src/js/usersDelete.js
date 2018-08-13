$(function() {
  $("#usersRow").on("click", ".userDeleteBtn", function(e){
    e.preventDefault();
    const userId = $(this).data("user-id");
    $.ajax({
      url: `//localhost:3000/users/${userId}`,
      method: 'DELETE'
    }).done((data) => {
      // console.log(data);
      // 移除指定的使用者的tr
      $(this).parents('tr').remove();
    })
  })
})