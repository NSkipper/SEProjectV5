<template>
   <div class='container-fluid'>
      <div v-bind:class='mainToolTableClasses'>
         <div class='container-fluid'>
            <vue-tabs>
               <v-tab title="Tools table">
                  <br/>
                  <tool-table v-bind:machines='machines' v-bind:tools='tools' v-on:handle-row='handleRowFunction'></tool-table>
               </v-tab>
            </vue-tabs>
         </div>
      </div>
      <div v-if='displayDetailPage' class='col-sm-6 container-fluid'>
         <vue-tabs>
            <v-tab title="Tool Details">
               <br/>
               <tool-detail v-bind:rowTool='rowFromTools'></tool-detail>
            </v-tab>
            <v-tab title="Components">
               <br/>
               <component-detail v-bind:tool='rowFromTools' v-bind:components='components'></component-detail>
            </v-tab>
         </vue-tabs>
      </div>
   </div>
</template>


<script>
import ToolTable from "./ToolTable";
import ToolDetail from './ToolDetail'
import ComponentDetail from './detailedComponent'
export default {
    props: ["tools", "machines", "components"],
    components: {
        ToolTable,
        ToolDetail,
        ComponentDetail
    },
    data() {
        return {
            rowFromTools: [],
            mainToolTableClasses:'col-sm-12',
            displayDetailPage:false
        };
    },
    methods: {
        handleRowFunction(row) {
            if(this.rowFromTools.Id==row.Id){
                this.rowFromTools=[];
                this.mainToolTableClasses='col-sm-12';
                this.displayDetailPage=false;
            }
            else{
                this.rowFromTools = row;
                this.mainToolTableClasses='col-sm-6';
                this.displayDetailPage=true;
            }
            
        }
    }
};
</script>
<style>
    table {
        table-layout: fixed;
        word-wrap: break-word;
    }
</style>

