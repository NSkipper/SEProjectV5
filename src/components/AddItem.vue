<template>
    <div>
        <vue-tabs>
            <v-tab title="Add Machine">
                <br/>
                <add-machine></add-machine>
            </v-tab>

            <v-tab title="Add Tool">
                <br/>
                <add-tool></add-tool>
            </v-tab>

            <v-tab title="Add Component">
                 <br/>
                <add-component></add-component>
            </v-tab>
        </vue-tabs>
    </div>
</template>

<script>
    import AddMachine from './AddMachine'
    import AddTool from './AddTool'
    import AddComponent from './AddComponent'
    export default {
        components: {
            AddMachine,
            AddTool,
            AddComponent
        }
    }
</script>