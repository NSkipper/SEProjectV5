<template>
   <div class="container-fluid">
         <div class='col-sm-12'>
            <div id="addmachine" class="tabAddItem">
                <form>
                    <div class="form-group">
                        <label for="mName">Machine name:</label>
                        <input type="text" class="form-control" id="mName" placeholder="Enter machine name">
                    </div>
                    <div class="form-group">
                        <label for="mSerial">Machine serial:</label>
                        <input type="text" class="form-control" id="mSerial" placeholder="Enter machine serial">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                    <button type="reset" class="btn btn-default">Reset</button>
                </form> 
            </div>
            <router-link v-bind:to="{name:'Overview'}">
                <button type="button" class="btn btn-default">Back to main</button>
            </router-link>
         </div>
      </div>
   </div>
</template>



<script>
    export default {

    }
</script>