<template>
   <div class='container-fluid'>
        <form class="form-inline" action="/action_page.php">
            <div class="form-group">
                <label for="toolTable">Select all tools from:</label>
                <select id='toolTable' class='form-control' v-model='selectedMachine'>
                    <option value="all" checked>All</option>
                    <option value=null>Not installed</option>
                    <option v-for="machine in uniqueMachines">{{machine}}</option>
                </select>
            </div>
            <div class="btn-group">
                <router-link :to="{name:'AddMachine'}">
                    <button type="button" class="btn" v-on:click="addMachine">Add Machines</button>
                </router-link>
                <router-link :to="{name:'AddTool'}" :machines='uniqueMachines'>
                    <button type="button" class="btn">Add Tools</button>
                </router-link>
            </div> 
        </form> 
   
        <div>
          <vue-bootstrap-table
              :columns="getToolKeys()"
              :values="filterToolByMachine"
              :show-filter="true"
              :show-column-picker="true"
              ::multi-column-sortable="true"
              :multi-column-sortable="true"
              :row-click-handler="handleRowFunction"
              :page-size=15
              :paginated="true"
              :filter-case-sensitive="false">
          </vue-bootstrap-table>
        </div>
   </div>
</template>

<script>
import VueBootstrapTable from "vue2-bootstrap-table2";
export default {
    props: ["machines", "tools"],
    data() {
        return {
            selectedMachine: 'all',
        };
    },
    components: {
        VueBootstrapTable: VueBootstrapTable
    },
    methods: {
        getKeys(arrayValue){
            var entry=arrayValue[0];
            var keyList=[];
            for (name in entry) {
                if (keyList.indexOf(name) == -1) {
                    keyList.push(name);
                }
            }
            return keyList;
        },
        addMachine(){
            let payload=this.getKeys(this.machines)
            this.$bus.$emit('add-machine',payload);
        },
        getToolKeys() {
            var entry;
            var name;
            var columns = [{
                    title: "Tool Name",
                    name: "Name",
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
                    title: "Station Number",
                    name: "StationNumber",
                    visible: true,
                    editable: false
                },
                {
                    title: "Owning Machine Serial",
                    name: "MachineSerial",
                    visible: true,
                    editable: false
                },
                {
                    title: "Attached Components",
                    name: "PartIds",
                    visible: true,
                    editable: false
                }
            ];
            var toolKeyList = ['Name', 'Type', 'StationNumber', 'MachineSerial','PartIds'];
            entry = this.tools[0];
            for (name in entry) {
                if (toolKeyList.indexOf(name) == -1) {
                    columns.push({
                        title: name,
                        name: name,
                        visible: false,
                        editable: false
                    });
                    toolKeyList.push(name);
                }
            }
            return columns;
        },
        handleRowFunction(event, entry){
            let handler = entry;
            this.$emit('handle-row',handler);
        },
        toolPassesMachineFilter() {
            var selectedMachineSerial = '';
            for (var i = 0, u = this.machines.length; i < u; i++) {
                if (this.machines[i].Name == this.selectedMachine) {
                    return this.machines[i].Serial;
                    break
                }
            }
        }
    },
    computed: {
        uniqueMachines: function() {
            var mules = [];
            var result = [];
            for (var i = 0; i < this.machines.length; i++) {
                mules.push({
                    Name: this.machines[i].Name
                });
            }
            mules = _.sortBy(mules, "Name");
            result = _.uniq(_.map(mules, "Name"));
            return result;
        },
        filterToolByMachine: function() {
            if (this.selectedMachine == 'all') {
                return this.tools;
            } else {
                return this.tools.filter(tool => tool.MachineSerial == this.toolPassesMachineFilter());
            }
        }
    }
};
</script> 