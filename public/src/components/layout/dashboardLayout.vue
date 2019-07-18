<template>
    <div class="dashboardLayout">
      <navbar/>
      <sidebar/>
      <dashboardContent/>
    </div>
</template>
<script >
import "../../assets/style/dashboardLayout.css";
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