<template>
    <div class="container-fluid">
        <div class='col-sm-12'>
            <form action="#" class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="cIdentifier">Component Identifier:</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="cIdentifier" placeholder="Enter Component Identifier" v-model="cIdentifier">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="cType">Component Type:</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control" id="cType" placeholder="Enter Component Type" v-model="cType">
                    </div>
                </div>
                <div v-if="cType.toLowerCase()=='die'">
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cClearance">Component Clearance:</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="cClearance" placeholder="Enter Component Clearance" v-model="cClearance">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="cHeight">Component Height:</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="cHeight" placeholder="Enter Component Height" v-model="cHeight">
                        </div>
                    </div>
                </div>
                <div v-if="counter>0">
                    <p>{{counter}} components added</p>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-4">
                        <button type="submit" class="btn btn-default" v-on:click="addItem">Submit</button>
                        <button type="reset" class="btn btn-default" v-on:click="resetFields">Reset</button>
                    </div>
                </div>
            </form>
            <router-link v-bind:to="{name:'Overview'}">
                <button type="button" class="btn btn-default">Back to main</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:["toolId"],
        data(){
            return{
                cIdentifier:'',
                cType:'',
                cClearance:'',
                cHeight:'',
                counter:0
            }
        },
        methods:{
            addItem(){
                let type='component';
                let payload=[];
                if(this.cType.toLowerCase()=='die'){
                    payload.push({
                        ToolId:this.toolId,
                        Identifier: this.cIdentifier,
                        Type: this.cType,
                        Attributes:[
                            {
                                Key:"Clearance",
                                Value:this.cClearance
                            },
                            {
                                Key:"Height",
                                Value:this.cHeight
                            }
                        ]
                    });
                }
                else{
                    payload.push({
                        Identifier: this.cIdentifier,
                        Type: this.cType,
                    })
                }
                this.$bus.$emit('add-item',type,payload);
                this.resetFields();
                this.counter+=1;
            },
            resetFields(){
                this.cIdentifier='';
                this.cType='';
                this.cClearance='';
                this.cHeight='';
            }
        }
    }
</script>