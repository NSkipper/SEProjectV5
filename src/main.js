// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuetify from 'vuetify'
Vue.use(Vuetify)


import 'bootstrap/dist/css/bootstrap.min.css'
import'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/main.styl'
import 'lodash/lodash.min.js'
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App v-bind:tools="toolsJSON" v-bind:machines="machineJSON" v-bind:parts="partsJSON"/>',
  components: { App },
  data:{
    machineJSON: [],
    toolsJSON: [],
    partsJSON: [],
  },
  methods: {
    fetchData: function () {
      var jsonURL1 = "../src/Json/machine.json"; //consist of machine information, and the list of ID of tools in those machines
      var jsonURL2 = "../src/Json/tools.json";//consist of tools information and a list of part IDs
      var jsonURL3 = "../src/Json/parts.json";//consist of part information
      var self = this;
      //json1 for machineJSON
      axios.get(jsonURL1)
        .then(function (response) {
          self.machineJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      //json2 for toolsJSON
      axios.get(jsonURL2)
        .then(function (response) {
          self.toolsJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      //json3 for partJSON
      axios.get(jsonURL3)
        .then(function (response) {
          self.partsJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created: function () {
    this.fetchData();
  }
})
