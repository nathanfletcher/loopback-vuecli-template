<template>
  
  <div> 
    <ul>
    <li v-for="(post,i) of posts" :key="post.id">
      <div class="note-card mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{post.title}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          {{post.body}}
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="deleteNote(i)">
            Delete
          </a>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">share</i>
          </button>
        </div>
      </div>
    </li>
  </ul>
  </div>


  <!--<div >
    <div class="mdl-card__title" v-for="post of posts" :key="3">
      <h2 class="mdl-card__title-text">{{post.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{post.body}}
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Delete
      </a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>
    </div>
  </div>-->

</template>

<script>
import {link} from '../helpers/http-common.js';

export default {
  name:'Notes',
  data() {
    return{
      notes:[],
      posts:[]
    }
  },
  created: function () {
    console.log('getting posts')
    link.get(`/Notes`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      //this.errors.push(e)
      console.log(e)
    })
  },
  methods:{
    deleteNote: function(i){
      //console.log('Delete function pressed '+i);
      let thePost = this.posts[i]
      link.delete(`/Notes/${thePost.id}`)
      .then(response => {
        //remove from vue array
        this.posts.splice(i,1)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
  .note-card{
    margin-bottom: 1em
  }
</style>
