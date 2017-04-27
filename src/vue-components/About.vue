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
        console.log(store.state);
        // this.message = store.state
      },
      refreshState: function() {
        this.message = store.state;
      }
    },
    beforeCreate: function () {
      console.log(store.state);
    },
    created: function () {
      this.changestate();
    },
    beforeUpdate: function () {
      console.log("beforeUpdate");
    },
    updated: function () {
      console.log("updated");
    },
    mounted: function () {
      console.log("mounted");
      this.refreshState();
    }
  }
</script>