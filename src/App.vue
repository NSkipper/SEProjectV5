<template>
   <div id="app">
      <router-view v-bind:tools="tools" v-bind:machines="machines" v-bind:parts="parts"/>
   </div>
</template>

<script>
export default {
    name: 'app',

    props: ['tools', 'machines', 'parts']
}
</script>

<style>

</style>
