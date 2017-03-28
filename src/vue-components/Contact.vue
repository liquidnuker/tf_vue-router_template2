<template>
  <div id="routes-contact">
    <p>contact</p>
    <p>store: {{ message }}</p>
  </div>
</template>

<script>
import {store} from "../store.js"
export default {
    name: 'routes-contact',
    data () {
      return {
        message: store.state
      }
    }
  }
</script>