<template>
   <div class="container-fluid">
         <div class='col-sm-12'>
            <div id="addmachine" class="tabAddItem">
               <form action="#" class="form-horizontal">
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="mName">Machine name:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="mName" placeholder="Enter machine name" name="mName">
                     </div>
                  </div>
                  <div class="form-group">
                     <label class="control-label col-sm-2" for="mName">Machine serial:</label>
                     <div class="col-sm-4">
                        <input type="text" class="form-control" id="mSerial" placeholder="Enter machine Serial" name="mSerial">
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