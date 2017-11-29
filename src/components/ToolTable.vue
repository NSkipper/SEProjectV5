<template>
   <div>
      <div class='col-sm-6'>
         
         <div class="form-group">
            <label for='toolTable'>Select all tools from</label>
            <select id='toolTable' class='form-control' v-model='selectedMachine'>
              <option value="all" checked>All</option>
              <option value=null>Not installed</option>
              <option v-for="machine in uniqueMachines">{{machine}}</option>
         </select>
         </div>
         

        <div>
          <vue-bootstrap-table
              :columns="getToolKeys()"
              :values="filterToolByMachine"
              :show-filter="true"
              :show-column-picker="true"
              :sortable="true"
              :multi-column-sortable="true"
              :filter-case-sensitive="false">
          </vue-bootstrap-table>
        </div>


        <v-app id="inspire">
    <v-layout row justify-center>
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
        <v-card>
          <v-card-title>Select Column</v-card-title>
          <v-divider></v-divider>
<v-checkbox label="John" v-model="ex5" value="John"></v-checkbox>
              <v-checkbox label="Jacob" v-model="ex5" value="Jacob"></v-checkbox>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
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
            dialog: false,
            ex5: ['John'],
            ex6: ['John'],
        };
    },
    components: {
        VueBootstrapTable: VueBootstrapTable
    },
    methods: {
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
                }
            ];
            var keyList = ["Name", "Type", "StationNumber", "MachineSerial"];
            entry = this.tools[0];
            for (name in entry) {
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
            return columns;
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
            var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k'];
            if (this.selectedMachine == 'all') {
                return this.tools;
            } else {
                return this.tools.filter(tool => tool.MachineSerial == this.toolPassesMachineFilter());
            }
        }
    }
};
</script> 