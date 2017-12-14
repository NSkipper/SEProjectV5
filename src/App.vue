<template>
   <div id="app">
        <div class="panel panel-default" style='background:#F7F9DB'>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand"><img src="../build/logo.png" alt="PrimaPower" style="height: 100%"></a>
                        <a class="navbar-brand" href="/">Tool Management</a>
                    </div>
                </div>
            </nav>
            <div class="panel-body" >
                <div class="panel panel-default">
                    <div class="panel-body">
                        <router-view :tools="tools" :machines="machines" :components="components" :toolId="toolId"/>
                    </div>
                </div> 
            </div>
            <div class="panel-footer">©DN-PM-TN, for PrimaPower</div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'app',
    props: ['tools', 'machines', 'components'],
    data(){
            return{
                toolId:''
            }
    },
    methods:{
        getToolId(toolId){
            this.toolId=toolId;
        }
    },
    created(){
        this.$bus.$on('get-tool-id', this.getToolId)
    }
}
</script>

<style>

</style>
