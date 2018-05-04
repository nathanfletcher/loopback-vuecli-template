<template>
  <div>
    <h1>Welcome to the users page</h1>
    <!-- FAB button -->
    <button @click="showCreateUserDialogue" class="mdl-button mdl-js-button mdl-button--fab dialog-button">
      <i class="material-icons">add</i>
    </button>
    <!-- Users Table -->
    <table id="usersTable" class="mdl-data-table mdl-js-data-table ">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Username</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,i) in users" :key="user.id">
            <td class="mdl-data-table__cell--non-numeric">{{user.name}}</td>
            <td>{{user.phonenumber}}</td>
            <td>{{user.email}}</td>
          <td>
              <span class="mdl-chip mdl-chip--contact" @click=deleteUser(i)>
                  <span class="mdl-chip__contact mdl-color--red mdl-color-text--white">D</span>
                  <span class="mdl-chip__text">Delete</span>
              </span>

              <span class="mdl-chip mdl-chip--contact" @click=updateUser(i)>
                  <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">U</span>
                  <span class="mdl-chip__text">Update</span>
              </span>
          </td>
        </tr>


      </tbody>
    </table>

    <!-- Create User Dialogue -->
    <dialog id="dialog" class="mdl-dialog">
      <h3 class="mdl-dialog__title">Create New User</h3>
      <div class="mdl-dialog__content">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                  id="email"
                  class="mdl-textfield__input"
                  type="text"
                  v-model="email">
              <label class="mdl-textfield__label" for="email">Email</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                  id="username"
                  class="mdl-textfield__input"
                  type="text"
                  v-model="username">
              <label class="mdl-textfield__label" for="email">Username</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                  id="pass"
                  class="mdl-textfield__input"
                  type="password"
                  v-model="password">
              <label class="mdl-textfield__label" for="pass">Password</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                  id="confrimPass"
                  class="mdl-textfield__input"
                  type="password"
                  v-model="confirm_password">
              <label class="mdl-textfield__label" for="confirmPass">Confirm Password</label>
          </div>
      </div>
      <div class="mdl-dialog__actions">
        <button type="button" class="mdl-button closeButton" @click="closeCreateUserDialogue">Close</button>
        <!-- <button type="button" class="mdl-button" disabled>Disabled action</button> -->
        <button type="button" class="mdl-button" @click="createUser"  >Create User</button>
      </div>
    </dialog>


    <!-- Login existing user Dialogue -->
    <dialog id="loginDialog" class="mdl-dialog">
        <h3 class="mdl-dialog__title">You must login to continue</h3>
        <div class="mdl-dialog__content">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                    id="loginEmail"
                    class="mdl-textfield__input"
                    type="text"
                    v-model="email">
                <label class="mdl-textfield__label" for="loginEmail">Email</label>
            </div>

            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                    id="loginPass"
                    class="mdl-textfield__input"
                    type="password"
                    v-model="password">
                <label class="mdl-textfield__label" for="loginPass">Password</label>
            </div>
        </div>
        <div class="mdl-dialog__actions">
          <!--<button type="button" class="mdl-button closeButton" @click="closeLoginDialogue">Close</button>-->
          <!-- <button type="button" class="mdl-button" disabled>Disabled action</button> -->
          <button type="button" class="mdl-button" @click=""  >Sign Up</button>
          <button type="button" class="mdl-button" @click=""  >Login</button>
        </div>
      </dialog>

      <!-- Update existing user Dialogue -->
    <dialog id="loginDialog" class="mdl-dialog">
        <h3 class="mdl-dialog__title">You must login to continue</h3>
        <div class="mdl-dialog__content">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                    id="loginPass"
                    class="mdl-textfield__input"
                    type="password"
                    v-model="password">
                <label class="mdl-textfield__label" for="loginPass">Password</label>
            </div>
        </div>
        <div class="mdl-dialog__actions">
          <!--<button type="button" class="mdl-button closeButton" @click="closeLoginDialogue">Close</button>-->
          <!-- <button type="button" class="mdl-button" disabled>Disabled action</button> -->
          <button type="button" class="mdl-button" @click=""  >Sign Up</button>
          <button type="button" class="mdl-button" @click=""  >Login</button>
        </div>
      </dialog>


  </div>
  
</template>


<script>
import {link} from '../helpers/http-common.js';

export default {
  name:'Users',
  data(){
      return {
        value:'PPP',
        users:[],
        email:``,
        username:``,
        password:``,
        confirm_password:``
      }
  },
  created: function(){
    let dialogButton = document.querySelector('.dialog-button');
    let dialog = document.querySelector('#dialog');
    let loginDialog = document.querySelector('#loginDialog')
    console.log(`getting loca stuff`)
    // console.log(`getting users: ${this.$store.token}`)
    // Get All Users
    // console.log(`Getting localstorage token: ${window.localStorage.getItem(`access_token`)}`)
    this.getAllUsers();
    
  },
  methods:{
      validateEmail: (email)=>{
          const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          console.log(email)
          if(email.match(pattern)){
              console.log(`found email`); 
              return email
          } 
          else
          console.log(`nothing `)
      },
      createUser(){
        console.log('creating user')
        
        link.post(`/AppUsers`,{username:this.username,email:this.email,password:this.password})
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(`User created ${JSON.stringify(response.data)}`)
          this.users.push(response.data)
          this.closeCreateUserDialogue()
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e)
        })
        
      },
      deleteUser: function(i){
        //console.log('Delete function pressed '+i);
        /*
        let thePost = this.users[i]
        link.delete(`/Notes/${thePost.id}`)
        .then(response => {
          //remove from vue array
          this.users.splice(i,1)
        })
        .catch(e => {
          this.errors.push(e)
        })
        */
        let r = confirm(`Are you sure you want to delete the user ${this.users[i].email} ?`);
        if (r == true) {
            //remove from vue array
            this.users.splice(i,1)
        }
       
      },
      updateUser(){
         link.get(`/AppUsers/`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      showLoginDialogue(){
        loginDialog.showModal();
      },
      closeLoginDialogue(){
        loginDialog.close();
      },
      showCreateUserDialogue(){
        dialog.showModal();
      },
      closeCreateUserDialogue(){
        dialog.close();
      },
      getLoggedInUser(){
        console.log(`getting logged in user`)
        console.log(JSON.stringify(this.$store.getters.getProfile))
        return this.$store.getters.getProfile;
      },
      getAllUsers(){
        let user = this.getLoggedInUser()
        console.log(user)
        link.get(`/AppUsers?access_token=${user.id}`)
        .then(response =>{
          console.log(JSON.stringify(response.data))
          return this.users = response.data
        })
        .catch(e => {
          this.showLoginDialogue()
        })
      }
  }
}
</script>

<style scoped>
  #usersTable{
    margin: 0 auto;
  }


.mdl-dialog {
  border: none;
  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
  width: 280px; }
.mdl-dialog__title {
  padding: 24px 24px 0;
  margin: 0;
  font-size: 2.5rem; }
.mdl-dialog__actions {
  padding: 8px 8px 8px 24px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }
  .mdl-dialog__actions > * {
    margin-right: 8px;
    height: 36px; }
    .mdl-dialog__actions > *:first-child {
      margin-right: 0; }
  .mdl-dialog__actions--full-width {
    padding: 0 0 8px 0; }
    .mdl-dialog__actions--full-width > * {
      height: 48px;
      -webkit-flex: 0 0 100%;
          -ms-flex: 0 0 100%;
              flex: 0 0 100%;
      padding-right: 16px;
      margin-right: 0;
      text-align: right; }
.mdl-dialog__content {
  padding: 20px 24px 24px 24px;
  color: rgba(0,0,0, 0.54); }
</style>
