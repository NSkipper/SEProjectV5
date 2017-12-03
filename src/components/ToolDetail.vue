<template>
    <div>
        <div class='container-fluid'>
            <!--Table 1-->
            <table class="table table-striped table-condensed table-responsive table-bordered">
                <tbody>
                    <tr v-for="key in getKeyList()">
                        <th>{{key}}</th>
                        <td>{{rowTool[key]}}</td>
                    </tr>
                </tbody>     
            </table> 
        </div>
    </div>    
</template>

<script>
export default {
  props: ["rowTool"],
  methods: {
    getKeyList() {
      var keyList = [];
      for (name in this.rowTool) {
        keyList.push(name);
      }
      return keyList;
    }
  }
};
</script>
