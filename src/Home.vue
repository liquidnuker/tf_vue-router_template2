<template>
  <div id="routes-home">
    <p>home</p>
    <p>store: {{ message }}</p>
  </div>
</template>

<script>
import {store} from "./store.js"
export default {
    name: 'routes-home',
    data () {
      return {
        message: store.state
      }
    }
  }
</script>