
function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}

const user = getLocalUser();
console.log(user);

const state = () => ({
   currentUser: user,
   isLoggedIn: !!user,
   loading: false,
   authError: [],
})

const getters = {
   isLoading : (state) => {
      return state.loading;
   },

   isLoggedIn : (state) => {
      return state.isLoggedIn;
   },

   currentUser : (state) => {
      return state.currentUser;
   },

   authError : (state) => {
      return state.authError;
   }
}

const actions = {
   login ({ commit },credentials) {
      return new Promise((res, rej) => {
      axios.post('/api/auth/login', credentials)
         .then((response) => {
               setAuthorization(response.data.access_token);
               res(response.data);
         })
         .catch((err) =>{
               rej("Wrong email or password");
         })
      }) 
   },
   logout(content){
      content.commit("LOGOUT");
   }
}

const mutations = {

   SET_USER_INFORMATIONS (state, { user }) {
         const { bio, public_email, city, web } = user;
         state.currentUser.bio = bio;
         state.currentUser.public_email = public_email;
         state.currentUser.city = city;
         state.currentUser.web = web;
   },

   LOGIN (state)  {
      state.loading = true;
      state.authError = null;
   },

   LOGIN_SUCCESS(state,payload) {
      state.authError = null;
      state.isLoggedIn = true;
      state.loading = false;
      state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
      localStorage.setItem("user", JSON.stringify(state.currentUser));
      
   },

   LOGIN_FAILED(state,payload) {
      state.loading = false;
      state.authError = payload.error;
   },

   LOGOUT  (state) {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.currentUser = null;
   }
}

function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}