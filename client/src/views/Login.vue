<template>
   <div>
        <div class="login-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Welcome</h2>
            </div>
            <div class="mdl-card__supporting-text">
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
                        id="pass"
                        class="mdl-textfield__input"
                        type="password"
                        v-model="password">
                    <label class="mdl-textfield__label" for="pass">Password</label>
                </div>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="login">
                Sign In
                </a>
            </div>
        </div>

   </div>
</template>

<script>
    import {link} from '../helpers/http-common.js';

    export default{
        data () {
            return {
            email: '',
            password: ''
            }
        },
        methods:{
            login: function(i){
                link.post(`/AppUsers/login`,{
                    username: this.email,
                    password: this.password,
                })
                .then(response => {
                    if(response.status == 200){
                        console.log(response)
                        this.$store.commit('setToken',response.data.id);
                        this.$store.commit('setProfile',response);
                        this.$store.commit('setHeaders',{
                            accept:'application/json',
                            authorization:`${response.data.id}`
                        });
                        console.log("hello world")
                        console.log("Returned Data",JSON.stringify(this.$store.getters.getHeaders))
                    }
                    else{
                       
                    }
                    return response
                })
                .catch(e => {
                    //this.errors.push(e)
                    console.log("THERE WAS A LOGIN ERROR")
                    console.log(e.name)
                    alert("your username or passoword is incorrect")
                })
            }
        }
    }
</script>

<style scoped>
    .login-card-wide{
        margin: 0 auto
    }
</style>
