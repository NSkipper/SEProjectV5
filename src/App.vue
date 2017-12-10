<template>
   <div id="app">
        <div class="panel panel-default" style='background:#fffff9'>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand"><img src="../build/logo.jpeg" alt="PrimaPower" style="height: 100%"></a>
                        <a class="navbar-brand" href="#">Tool Management</a>
                    </div>
                </div>
            </nav>
            <div class="panel-body" >
                <div class="panel panel-default">
                    <div class="panel-body">
                        <router-view :tools="tools" :machines="machines" :components="components"/>
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
    methods:{
        addMachine(payload){
            console.log('this is'+payload);
        }
    },
    created(){
        this.$bus.$on('add-machine', this.addMachine)
    }
}
</script>

<style>

</style>
