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
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Sign In
                </a>
            </div>
        </div>

   </div>
</template>

<script>
    export default{
        data () {
            return {
            email: null,
            password: null
            }
        },
    }
</script>

<style scoped>
    .login-card-wide{
        margin: 0 auto
    }
</style>
