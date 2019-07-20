<template>
  <div :style="screenMonitor.sidebar" class="sidebar">
    <div class="sidebarHeader" :style="screenMonitor.sidebarHeader">
      <img :src="logo" alt="Logo" />&nbsp;
      <p>ShuriDash</p>
    </div>
   <span class="sidebarToggler" @click="toggleSidebar()" :style="screenMonitor.sidebarToggler">
      <i class="fa fa-bars"></i>
    </span> 

    <router-link to="/home" class="sidebarLink" @click="toggleSidebar()">
      <div class="routeLink" :style="screenMonitor.routeLink" >
        <i class="fa fa-home"></i>&nbsp;
        <p :style="screenMonitor.routerName">Home</p>
      </div>
    </router-link>
    <div class="schoolItems" :style="screenMonitor.schoolItems">
      <div class="ListTitle" @click="showSchools=!showSchools,showAllSchools=false">
         <p class="mainTitle">Schools</p>
      <i v-show="!showSchools" class="fa fa-caret-up"></i>
      <i
        v-show="showSchools"
        class="fa fa-caret-down"
      ></i>
      </div>
     
      <div v-show="showSchools">
        <div class="schoolList">
          <div class="items" v-for="(school,index) in schools" :key="index" @click="$router.push('/schoolProfile'),toggleSidebar()">
            <span :style="{background:school.logo}"></span>
            <p>{{school.name}}</p>
          </div>
        </div>
        <div v-show="showAllSchools">
          <p class="all" @click="$router.push('/schools'),toggleSidebar()">All Items</p>
          <p class="more" @click="showAllSchools=false">Show Less</p>
        </div>

        <p v-show="!showAllSchools" class="more" @click="showAllSchools=true">Show More</p>
      </div>
    </div>
    <div class="companyItems" :style="screenMonitor.companyItems">
      <div class="ListTitle" @click="showCompanies=!showCompanies">
        <p class="mainTitle">Bus Company</p>
        <i v-show="!showCompanies" class="fa fa-caret-up" @click="showCompanies=true"></i>
        <i v-show="showCompanies" class="fa fa-caret-down" @click="showCompanies=false"></i>
      </div>
      
      <div v-show="showCompanies">
        <div class="companyList" v-show="showCompanies">
          <div class="items" v-for="(company,index) in companies" :key="index" @click="toggleSidebar()">
            <span :style="{background:company.logo}"></span>
            <p>{{company.name}}</p>
          </div>
        </div>
        <div v-show="showAllCompanies">
          <p class="all" @click="$router.push('/companies'),toggleSidebar()">All Items</p>
          <p class="more" @click="showAllCompanies=false">Show Less</p>
        </div>

        <p v-show="!showAllCompanies" class="more" @click="showAllCompanies=true">Show More</p>
      </div>
    </div>
  </div>
</template>
<script >
import "../../assets/style/sidebar.scss";
import { setTimeout } from "timers";
export default {
  name: "sidebar",
  data() {
    return {
      logo: "vue-logo.png",
      showAllSchools: false,
      showSchools: true,
      showCompanies: true,
      showAllCompanies: false,
      toggleSidebarState: "",
      isToggled: false,

      schools: [
        {
          name: "Apapec-irebero",
          logo: "yellow"
        },
        {
          name: "Green Hills",
          logo: "violet"
        },
        {
          name: "La colombiere",
          logo: "blue"
        }
      ],
      companies: [
        {
          name: "School bus safety",
          logo: "yellow"
        },
        {
          name: "Hope school bus",
          logo: "violet"
        },
        {
          name: "Volcanoes",
          logo: "blue"
        }
      ]
    };
  },
  computed: {
    screenMonitor() {
      return this.$store.getters.screenVal;
    }
  },
  methods: {
    toggleSidebar() { 
    if(this.screenMonitor.sidebarToggler===""){    
      this.$store.dispatch("SideToggler");  
    }else{
      this.$store.dispatch("initialToggler");
    }    
    }
  }
};
</script>
<style scoped>
.hideSidebar {
  margin-left: -239px;
}
</style>