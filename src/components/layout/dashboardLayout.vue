<template>
    <div class="dashboardLayout" :style="layout.layoutStyle">
      <navbar/>
      <sidebar/>
      <dashboardContent/>
    </div>
</template>
<script >
import "../../assets/style/dashboardLayout.scss";
import navbar from "./navbar.vue";
import sidebar from "./sidebar.vue";
import dashboardContent from "./content.vue";
export default {
  name: "dashboardLayout",
    components: {
    navbar,
    sidebar,
    dashboardContent
  },
  computed:{
    layout(){
      return this.$store.getters.screenVal
    }
  },
  data() {
    return {
      
    };
  },

  created() {
  
  },

  methods: {
    
  }
};
</script>