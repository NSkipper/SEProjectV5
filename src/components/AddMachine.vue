<template>
   <div class="container-fluid">
         <div class='col-sm-12'>
            <div id="addmachine" class="tabAddItem">
                <form>
                    <div class="form-group">
                        <label for="mName">Machine name:</label>
                        <input type="text" class="form-control" id="mName" placeholder="Enter machine name" v-model="machineName">
                    </div>
                    <div class="form-group">
                        <label for="mSerial">Machine serial:</label>
                        <input type="text" class="form-control" id="mSerial" placeholder="Enter machine serial" v-model="machineSerial">
                    </div>
                    <div v-if="counter>0">
                        <p>{{counter}} machines added</p>
                    </div>
                    <button type="submit" class="btn btn-default" v-on:click="addItem">Submit</button>
                    <button type="reset" class="btn btn-default" v-on:click="resetFields">Reset</button>
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
        props: [],
        data(){
            return{
                machineName:'',
                machineSerial:'',
                counter:0,
            }
        },
        methods:{
            addItem(){
                let type='machine';
                let payload=[];
                payload.push({
                    Serial: this.machineSerial,
                    Name: this.machineName
                })
                this.$bus.$emit('add-item',type,payload);
                this.resetFields();
                this.counter+=1;
            },
            resetFields(){
                this.machineName='';
                this.machineSerial='';
            }
        }
    }
</script>