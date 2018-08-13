$(function(){
  $.ajax({
    url: '//localhost:3000/users',
    method: 'GET'
  }).done((users) => {
    // console.log(users);
    users.forEach((user, index) => {
      const userContent = `
      <tr>
        <th scope="row">${ index + 1 }</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.birthday}</td>
        <td>
          <a href='#' class="btn btn-info">編輯</a>
          <a href='#' class="btn btn-danger">刪除</a>
        </td>
      </tr>
      `;
      $("#usersRow").append(userContent);
    })
  });
})