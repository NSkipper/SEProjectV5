// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'lodash/lodash.min.js'
Vue.config.productionTip = false;
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus',{get() {return this.$root.bus} });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App v-bind:tools="toolsJSON" v-bind:machines="machineJSON" v-bind:components="componentsJSON"/>',
  components: { App },
  data:{
    machineJSON: [],
    toolsJSON: [],
    componentsJSON: [],
    bus
  },
  methods: {
    fetchData: function () {
      var jsonURL1 = "../src/Json/machine.json"; //consist of machine information, and the list of ID of tools in those machines
      var jsonURL2 = "../src/Json/tools.json";//consist of tools information and a list of part IDs
      var jsonURL3 ="../src/Json/toolsStorage.json";//consist of tools that is not in use
      var jsonURL4 = "../src/Json/parts.json";//consist of part information
      var jsonURL5 = "../src/Json/partsStorage.json";//consist of part storage information
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
       //json3 for toolStorage concatting the storage and tool into one big json
       axios.get(jsonURL3)
       .then(function (response) {
         self.toolsJSON = self.toolsJSON.concat(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });  
      //json4 for partJSON
      axios.get(jsonURL4)
        .then(function (response) {
          self.componentsJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
        //json5 for part storage
        axios.get(jsonURL5)
        .then(function (response) {
          self.componentsJSON = self.componentsJSON.concat(response.data);
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
