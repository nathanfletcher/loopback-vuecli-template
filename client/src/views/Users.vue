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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">zcrylic (Transparent)</td>
          <td>25</td>
          <td>
            <!-- Right aligned menu below button -->
            <button id="demo-menu-lower-right"
                    class="mdl-button mdl-js-button ">
              <!--<i class="material-icons">more_vert</i>--> Action
            </button>

            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                for="demo-menu-lower-right">
              <li class="mdl-menu__item">Update User</li>
              <li class="mdl-menu__item">Delete User</li>
              <li disabled class="mdl-menu__item">Reset Password</li>
              <li class="mdl-menu__item">Yet Another Action</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
          <td>50</td>
          <td>$1.25</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
          <td>10</td>
          <td>$2.35</td>
        </tr>
      </tbody>
    </table>

    <!-- Create User Dialogue -->
    <dialog id="dialog" class="mdl-dialog">
      <h3 class="mdl-dialog__title">MDL Dialog</h3>
      <div class="mdl-dialog__content">
        <p>
          This is an example of the Material Design Lite dialog component.
          Please use responsibly.
        </p>
      </div>
      <div class="mdl-dialog__actions">
        <button type="button" class="mdl-button closeButton" @click="closeCreateUserDialogue">Close</button>
        <!-- <button type="button" class="mdl-button" disabled>Disabled action</button> -->
        <button type="button" class="mdl-button" @click="createUser"  >Create User</button>
      </div>
    </dialog>


  </div>
  
</template>


<script>
import axios from 'axios';

export default {
  name:'Users',
  data(){
    return{
      users:[]
    }
  },
  created: function(){
    let dialogButton = document.querySelector('.dialog-button');
    let dialog = document.querySelector('#dialog');

    //Get All Users
    /*
    axios.get(`http://localhost:3000/api/AppUsers`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    */
  },
  methods:{
      createUser(){
        console.log('creating user')
        /*
        axios.get(`http://localhost:3000/api/AppUsers`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
        */
      },
      deleteUser(){
        axios.get(`http://localhost:3000/api/AppUser`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      updateUser(){
         axios.get(`http://localhost:3000/api/AppUser/`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      },
      showCreateUserDialogue(){
        dialog.showModal();
      },
      closeCreateUserDialogue(){
        dialog.close();
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
