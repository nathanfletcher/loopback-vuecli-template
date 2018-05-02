import Vue from 'vue'

const state = { 
    status: '', 
    profile: {},
    token: localStorage.getItem('access_token') || '',
    headers:{
        accept:'application/json',
        authorization:''
    },
}

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  getHeaders: state => state.headers,

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
}

const mutations = {
  setProfile: (state, userProfile) => {
      state.profile =  userProfile;
  },
  setHeaders: (state, header) =>{
      state.headers = header;
  },
  setToken: (state, token) =>{
      state.token = token;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}