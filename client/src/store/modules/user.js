import Vue from 'vue'
import {link} from '../../helpers/http-common';

const state = { 
    status: '', 
    profile: {},
    token: window.localStorage.getItem('access_token') || '',
    headers:{
        accept:'application/json',
        authorization:''
    },
}

const getters = {
  getProfile: state => {
    console.log(`inside getProfile`)
    if(!state.profile.id){
      console.log(`state didn't find a token. Redirect to login page`)
      state.profile = JSON.parse(window.localStorage.getItem(`profile`))
    }
    return state.profile
  },
  isProfileLoaded: state => !!state.profile.name,
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  getHeaders: state => state.headers,
  getToken: state => {
    state.token = window.localStorage.getItem(`access_token`)
  }
}

const actions = {
  /*[USER_REQUEST]: ({commit, dispatch}) => {
    commit(USER_REQUEST)
    apiCall({url: 'user/me'})
      .then(resp => {
        commit(USER_SUCCESS, resp)
      })
      .catch(resp => {
        commit(USER_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },*/
  getTokenProfile: (context,token) => {
    // Trying to get the user's profile from the token
  },

  login: (context,credentials) => {
    link.post(`/AppUsers/login`,{
      username: credentials.email,
      password: credentials.password,
    })
    .then(response => {
        if(response.status == 200){
            console.log(response)
            this.$store.commit('setToken',response.data.id);
            this.$store.commit('setProfile',response.data);
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

const mutations = {
  setProfile: (state, userProfile) => {
      window.localStorage.setItem(`profile`,JSON.stringify(userProfile))
      state.profile =  userProfile;
  },
  setHeaders: (state, header) =>{
      state.headers = header;
  },
  setToken: (state, token) =>{
      window.localStorage.setItem(`access_token`, token)
      state.token = token;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}