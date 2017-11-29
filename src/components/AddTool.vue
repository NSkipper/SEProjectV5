<template>
   <div class="container-fluid">
      
         <div class='col-sm-10'>
            <div id="addtool" class="tabAddItem">
               <form action="#" class="form-horizontal">
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="tName">Tool Name:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="tName" placeholder="Enter tool name" name="tName">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="tID">Tool ID:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="tID" placeholder="Enter tool ID" name="tID">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="tType">Tool Type:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="tType" placeholder="Enter tool type" name="tType">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="tSize">Tool Size:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="tSize" placeholder="Enter tool size" name="tSize">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="tShape">Tool Shape:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="tShape" placeholder="Enter tool shape" name="tShape">
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="col-sm-offset-2 col-sm-4">
                        <button type="submit" class="btn btn-default">Submit</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>





<script>
    export default {

    }
</script>