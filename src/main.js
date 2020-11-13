import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase';
require('firebase/firestore');


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBknbPlYzWsKlU_DrcP9LMTqLd-vLU9hQ0",
    authDomain: "nfh-doodle.firebaseapp.com",
    databaseURL: "https://nfh-doodle.firebaseio.com",
    projectId: "nfh-doodle",
    storageBucket: "nfh-doodle.appspot.com",
    messagingSenderId: "667643233011",
    appId: "1:667643233011:web:9a7728b98b4687385bed86"
  };
  firebase.initializeApp(firebaseConfig);

  /* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
