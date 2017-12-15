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
    bus,
    jsonURL1 : "../src/Json/machine.json", //consist of machine information, and the list of ID of tools in those machines
    jsonURL2 : "../src/Json/tools.json",//consist of tools information and a list of part IDs
    jsonURL3 :"../src/Json/toolsStorage.json",//consist of tools that is not in use
    jsonURL4 : "../src/Json/parts.json",//consist of part information
    jsonURL5 : "../src/Json/partsStorage.json",//consist of part storage information
  },
  methods: {
    fetchData: function () {

      var self = this;
      //json1 for machineJSON
      axios.get(this.jsonURL1)
        .then(function (response) {
          self.machineJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      //json2 for toolsJSON
      axios.get(this.jsonURL2)
        .then(function (response) {
          self.toolsJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
       //json3 for toolStorage concatting the storage and tool into one big json
       axios.get(this.jsonURL3)
       .then(function (response) {
         self.toolsJSON = self.toolsJSON.concat(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });  
      //json4 for partJSON
      axios.get(this.jsonURL4)
        .then(function (response) {
          self.componentsJSON = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
        //json5 for part storage
        axios.get(this.jsonURL5)
        .then(function (response) {
          self.componentsJSON = self.componentsJSON.concat(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    postItems(type, payload){
      let jsonPostURL='';
      if(type=="machine"){
        jsonPostURL=this.jsonURL1
      }
      if(type=="tool"){
        if(payload[0].MachineSerial!="null"){
          jsonPostURL=this.jsonURL2
        }else{
          jsonPostURL=this.jsonURL3
        }
      }
      if(type=="component"){
        jsonPostURL=this.jsonURL4
      }
      if(jsonPostURL!=''){
        axios.post(jsonPostURL, payload[0])
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  },
  created: function () {
    this.fetchData();
    this.$bus.$on('add-item', this.postItems)
  }
})
