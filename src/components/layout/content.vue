<template>
  <div class="dashboardContent" :style="sidebarTriggered.mainContentHeight">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script >
export default {
  name: "dashboardContent",
  computed:{
    sidebarTriggered:{      
      get: function() {
        return this.$store.getters.screenVal;
      },
      set: function() {}
      }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
  .fade-leave-to  
 {
  opacity: 0;
}
</style>
