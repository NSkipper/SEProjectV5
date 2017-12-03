<template>
   <div id="app">
      <router-view v-bind:tools="tools" v-bind:machines="machines" v-bind:components="components"/>
   </div>
</template>

<script>
export default {
    name: 'app',

    props: ['tools', 'machines', 'components']
}
</script>

<style>

</style>
