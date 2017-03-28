<template>
  <div id="routes-about">
    <p>about</p>
    <p>store: {{ message }}</p>
    <button v-on:click="changestate">change state</button>
  </div>
</template>

<script>
import {store} from "../store.js"
export default {
    name: 'routes-about',
    data () {
      return {
        message: store.state
      }
    },
    methods: {
      changestate: function() {
        store.state = "changed state"
        this.message = store.state
      }
    }
  }
</script>