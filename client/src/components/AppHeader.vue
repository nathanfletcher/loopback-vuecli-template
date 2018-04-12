<template>
  <div>
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row ">
        <!-- Title -->
        <span class="mdl-layout-title">Title</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" :to="{name: 'Homepage'}">Home</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Notes'}">Notes</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Users'}">Profile</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Login'}">Login</router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" :to="{name: 'Homepage'}">Home</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Notes'}">Notes</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Users'}">Profile</router-link>
        <router-link class="mdl-navigation__link" :to="{name: 'Login'}">Login</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-header'
}
</script>
