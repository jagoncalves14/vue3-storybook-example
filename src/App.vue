<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue"
import { useMeta, useActiveMeta } from 'vue-meta'
import HelloWorld from "./components/HelloWorld.vue"

export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  },
  setup() {
    const activeMetaData = useActiveMeta()

    useMeta({
      title: 'Hello World',
      description: 'Some description',
    })

    watch(activeMetaData, newMetaData => {
      window.console.log(newMetaData)
    })
  }
})
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
