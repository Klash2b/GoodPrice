<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <myContentDrawer />
    </v-navigation-drawer>

    <v-app-bar class="myGradient" style="display:flex;justify-content:center;">
      <!-- <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title @click="goHome" class="white--text"><v-img width="150px" src="GoodPrice-logo-cropped-white.png" /></v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import myContentDrawer from "@/components/Drawer"

export default {
  name: "myToolbar",
  components: {myContentDrawer},
  data: function() {
    return {
      drawer: false
    }
  },
  mounted: function () {
    // Listen for event openDrawer (triggered by other component, like the button in the home)
    document.addEventListener("toggleDrawer", this.toggleDrawer);
  },
  beforeDestroy: function () {
    // If the component is unmount, unlisten the event.
    document.removeEventListener("toggleDrawer", this.toggleDrawer);
  },
  methods: {
    toggleDrawer (){
      this.drawer = !this.drawer;
    },
    goHome (){
      window.location.hash = "/";
    }
  }
}
</script>

<style scoped>
.myGradient {
  background: linear-gradient(45deg, #7c3581, #e26047)
}
</style>