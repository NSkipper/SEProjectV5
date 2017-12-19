<template>   
    <div>
        <div class='row'>
            <h3>Components installed in {{tool.Name}}:</h3>
            <vue-bootstrap-table :columns="getComponentKeys()"
                :values="getPartsFromSelectedTool"  
                :row-click-handler="handleRowFunction"          
                :show-column-picker="true">
            </vue-bootstrap-table>
        </div>

        <router-link v-bind:to="{name:'AddComponent'}">
            <button type="button" class="btn" v-on:click="getClickedToolId">Add Components</button>
        </router-link>

        <div class='row container-fluid' v-if='rowClicked'>
            <h4>{{rowComponentInfo.Identifier}} detailed information:</h4>
            <table class="table table-striped table-condensed table-responsive table-bordered">
                <tbody>
                    <tr v-for="key in getComponentKeys()">
                        <th>{{key.name}}</th>
                        <td>{{rowComponentInfo[key.name]}}</td>
                    </tr>
                </tbody>     
            </table> 
        </div>    
    </div>    
</template>

<script>
import VueBootstrapTable from "vue2-bootstrap-table2";
export default {
    props: ["tool", "components"],
    components: {
        VueBootstrapTable: VueBootstrapTable
    },
    data(){
        return{
            includedComponent:[],
            partColumns: [
                {
                    title: "Identifier",
                    name: "Identifier",
                    visible: true,
                    editable: false,
                },
                {
                    title: "Type",
                    name: "Type",
                    visible: true,
                    editable: false,
                },
                {
                    title: "Hitcount",
                    name: "Hitcount",
                    visible: true,
                    editable: false,
                }
            ],
            rowComponentInfo:[],
            rowClicked:false
        }
    },
    methods:{
        //This is mainly to pull all the attribute from the part outside and have them act as a separate attribute of the part.
        reformatPart(includedComponent){
            //loop through the raw partJSON
           for (var i = 0, u = includedComponent.length; i < u; i++) {
                //for each object, loops through them
               var attributesCounter = includedComponent[i].Attributes.length;
               for (var x = 0, y = attributesCounter; x < y; x++) {
                    var key = includedComponent[i].Attributes[x].Key
                    var value = includedComponent[i].Attributes[x].Value;
                    includedComponent[i][key] = value;
                }
            }
            
        },
        getComponentKeys() {
            var entry;
            var name;
            var columns = [{
                    title: "Identifier",
                    name: "Identifier",
                    visible: true,
                    editable: false
                },
                {
                    title: "Type",
                    name: "Type",
                    visible: true,
                    editable: false
                },
                {
                    title: "Hitcount",
                    name: "Hitcount",
                    visible: true,
                    editable: false
                }
            ];
            if(this.includedComponent.length==0){
                return columns;
            }
            else{
                var keyList = ["Name", "Type", "Hitcount"];
                
                for(var i =0,u=this.includedComponent.length;i<u;i++){
                    entry = this.includedComponent[i];
                    for (name in entry) {
                        if(name!='Attributes'){
                            if (keyList.indexOf(name) == -1) {
                                columns.push({
                                    title: name,
                                    name: name,
                                    visible: false,
                                    editable: false
                                });
                                keyList.push(name);
                            }
                        }  
                    }
                }
                return columns;
            }
        },
        handleRowFunction(event, entry){
            this.rowComponentInfo=entry;
            this.rowClicked=true;
        },
        getClickedToolId(){
            this.$bus.$emit('get-tool-id',this.tool.Id);
        }
    },
    computed:{
        getPartsFromSelectedTool: function(){
            if(this.tool.length==0){
                return this.includedComponent;
            }
            else{
                this.includedComponent = [];
                this.rowSelected=true;
                for(var i=0,u=this.tool.PartIds.length;i<u;i++){
                    for(var x=0, y=this.components.length; x<y; x++){
                        if(this.tool.PartIds[i]==this.components[x].Identifier){
                            this.includedComponent.push(this.components[x]);
                            break;
                        }
                    }
                }
                this.reformatPart(this.includedComponent);//pulling all the nested attributes
                return this.includedComponent;
            }
        }
    }
}
</script>

