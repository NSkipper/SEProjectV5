<template>
  <div class='container-fluid'>     
        <br/>
        <!-- <router-view name="AddMachine"></router-view> -->
      <tool-table v-bind:machines='machines' v-bind:tools='tools'></tool-table>
  </div>
</template>
<script>
import ToolTable from "./ToolTable.vue";
import AddMachine from './AddMachine'
export default {
  props: ["tools", "machines", "parts"],
  components: {
    ToolTable,
    AddMachine,
  }
};
</script>

