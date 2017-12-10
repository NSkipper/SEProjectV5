<template>
   <div class="container-fluid">
      <div class='col-sm-12'>
         <form>
            <div class="form-group">
               <label for="tName">Tool Name:</label>
               <input type="text" class="form-control" id="tName">
            </div>
            <div class="form-group">
               <label for="tType">Tool Type:</label>
               <input type="text" class="form-control" id="tType">
            </div>
            <div class="form-group">
               <label for="tSize">Tool Size:</label>
               <input type="text" class="form-control" id="tSize">
            </div>
            <div class="form-group">
               <label for="tShape">Tool Shape:</label>
               <input type="text" class="form-control" id="tShape">
            </div>
            <div class="form-group">
               <label class="control-label" for="tShape">Machine to install to:</label>
               <select id='toolTable' class='form-control'>
                  <option value=null>Not installed yet</option>
                  <option v-for="machine in machines">{{machine.Name}}</option>
               </select>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
            <button type="reset" class="btn btn-default">Reset</button>
         </form>
         <router-link v-bind:to="{name:'Overview'}">
            <button type="button" class="btn btn-default">Back to main</button>
         </router-link>
      </div>
   </div>
   </div>
</template>





<script>
    export default {
        props: ["machines"],
    }
</script>