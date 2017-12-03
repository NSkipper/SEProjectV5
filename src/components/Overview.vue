<template>
    <div class='container-fluid'>
        <div class='col-sm-6'>
            <vue-tabs>
                <v-tab title="Tools table">
                    <br/>
                    <tool-table v-bind:machines='machines' v-bind:tools='tools' v-on:handle-row='handleRowFunction'></tool-table>
                </v-tab>

                <v-tab title="Add Items">
                    <add-item></add-item>
                </v-tab>
            </vue-tabs>
        </div>
        <div class='col-sm-6'>
            <vue-tabs>
                <v-tab title="Tool Details">
                    <br/>
                    <tool-detail v-bind:rowTool='rowFromTool'></tool-detail>
                </v-tab>

                <v-tab title="Components">
                    <br/>
                    <p>Put components detail here</p>
                </v-tab>
            </vue-tabs>
        </div>  
    </div>
</template>
<script>
import ToolTable from "./ToolTable";
import AddItem from './AddItem'
import ToolDetail from './ToolDetail'
export default {
  props: ["tools", "machines", "parts"],
  components: {
    ToolTable,
    AddItem,
    ToolDetail
  },
  data() {
        return {
            rowFromTool:[]
        };
    },
  methods: {
    handleRowFunction(row) {
        this.rowFromTool = row;
    }
}
};
</script>

