import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
//render the page
render() {
    return html`
    <head>
    </head>
    <form id="userForm" method="POST">
    <div>
      <label for="email">Email</label>
      <input id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>
    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div>
      <label for="oldpwd">Old Password</label>
      <input type="password" id="oldpwd" name="oldpwd" type="text" value="">
    </div>
    <div>
      <label for="newpwd">New Password</label>
      <input type="password" id="pwd" name="pwd" type="text" value="">
  </div>
  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" value="Edit User"></input>
</form>
    `;
  }

  //updating information about a specific user account
  updateUser(e) {
    //retrieving data from the html form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
      if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }
}
customElements.define('edit-user', EditUser);
