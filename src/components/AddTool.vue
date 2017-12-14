<template>
   <div class="container-fluid">
      <div class='col-sm-12'>
         <form>
            <div class="form-group">
               <label for="tId">Tool Id:</label>
               <input type="text" class="form-control" id="tId" v-model="toolId">
            </div>
            <div class="form-group">
               <label for="tName">Tool Name:</label>
               <input type="text" class="form-control" id="tName" v-model="toolName">
            </div>
            <div class="form-group">
               <label for="tShape">Tool Shape:</label>
               <input type="text" class="form-control" id="tShape" v-model="toolShape">
            </div>
            <div class="form-group">
               <label for="tSize">Tool Size:</label>
               <input type="text" class="form-control" id="tSize" v-model="toolSize">
            </div>
            <div class="form-group">
               <label for="tDiameter">Tool Diameter:</label>
               <input type="text" class="form-control" id="tDiameter" v-model="toolDiameter">
            </div>
            <div class="form-group">
               <label for="tXDimension">Tool Xdimension:</label>
               <input type="text" class="form-control" id="tXDimension" v-model="toolXdimension">
            </div>
             <div class="form-group">
               <label for="tYDimension">Tool Ydimension:</label>
               <input type="text" class="form-control" id="tYDimension" v-model="toolYdimension">
            </div>
            <div class="form-group">
               <label for="tStationNum">Tool StationNumber:</label>
               <input type="text" class="form-control" id="tStationNum" v-model="toolStationNumber">
            </div>
            <div class="form-group">
               <label for="tType">Tool Type:</label>
               <input type="text" class="form-control" id="tType" v-model="toolType">
            </div>
            <div class="form-group">
               <label class="control-label" for="tMSerial">Machine to install to:</label>
               <select id='tMSerial' class='form-control' v-model="machineSerial">
                  <option value=null>Not installed yet</option>
                  <option v-for="machine in machines">{{machine.Serial}}</option>
               </select>
            </div>
            <div v-if="counter>0">
                <p>{{counter}} tools added</p>
            </div>
            <button type="submit" class="btn btn-default" v-on:click="addItem">Submit</button>
            <button type="reset" class="btn btn-default" v-on:click="resetFields">Reset</button>
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
        data(){
            return{
                toolId:'',
                toolName:'',
                toolShape:'',
                toolSize:'',
                toolDiameter:'',
                toolXdimension:'',
                toolYdimension:'',
                toolStationNumber:'',
                toolType:'',
                machineSerial:'',
                counter:0
            }
        },
        methods:{
            addItem(){
                let type='tool';
                let payload=[];
                payload.push({
                    Id: this.toolId,
                    Name: this.toolName,
                    Shape: this.toolShape,
                    Size: this.toolSize,
                    Diameter: this.toolDiameter,
                    Xdimension: this.toolXdimension,
                    Ydimension: this.toolYdimension,
                    StationNumber: this.toolStationNumber,
                    MachineSerial: this.machineSerial,
                    Type: this.toolType,
                })
                this.$bus.$emit('add-item',type,payload);
                this.resetFields();
                this.counter+=1
            },
            resetFields(){
                this.toolId='';
                this.toolName='';
                this.toolShape='';
                this.toolSize='';
                this.toolDiameter='';
                this.toolXdimension='';
                this.toolYdimension='';
                this.toolStationNumber='';
                this.toolType='';
                this.machineSerial='null'
            }
        }
    }
</script>