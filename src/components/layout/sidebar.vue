<template>
  <div :class="screenMonitor.sidebarStyle" class="sidebar">
    <div class="sidebarHeader">
      <img :src="logo" alt="Logo" />&nbsp;
      <p>ShuriDash</p>
    </div>
    <span class="sidebarToggler" @click="toggleSidebar()" ref="sidebarToggler">
      <i class="fa fa-bars"></i>
      <i class="fa fa-caret-left"></i>
    </span>

    <router-link to="/home" class="sidebarLink">
      <div class="routeLink">
        <i class="fa fa-home"></i>&nbsp;
        <p>Home</p>
      </div>
    </router-link>
    <div class="schoolItems">
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
          <div class="items" v-for="(school,index) in schools" :key="index" @click="$router.push('/schoolProfile')">
            <span :style="{background:school.logo}"></span>
            <p>{{school.name}}</p>
          </div>
        </div>
        <div v-show="showAllSchools">
          <p class="all" @click="$router.push('/schools')">All Items</p>
          <p class="more" @click="showAllSchools=false">Show Less</p>
        </div>

        <p v-show="!showAllSchools" class="more" @click="showAllSchools=true">Show More</p>
      </div>
    </div>
    <div class="companyItems">
      <div class="ListTitle" @click="showCompanies=!showCompanies">
        <p class="mainTitle">Bus Company</p>
        <i v-show="!showCompanies" class="fa fa-caret-up" @click="showCompanies=true"></i>
        <i v-show="showCompanies" class="fa fa-caret-down" @click="showCompanies=false"></i>
      </div>
      
      <div v-show="showCompanies">
        <div class="companyList" v-show="showCompanies">
          <div class="items" v-for="(company,index) in companies" :key="index">
            <span :style="{background:company.logo}"></span>
            <p>{{company.name}}</p>
          </div>
        </div>
        <div v-show="showAllCompanies">
          <p class="all" @click="$router.push('/companies')">All Items</p>
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
    screenMonitor: {
      get: function() {
        return this.$store.getters.screenVal;
      },
      set: function() {}
    }
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebarToggler.style = "display:none";
      setTimeout(() => {
        this.$refs.sidebarToggler.style = "";
      }, 1000);
      this.$store.dispatch("leftSideToggler");      
    }
  }
};
</script>
<style scoped>
.hideSidebar {
  margin-left: -239px;
}
</style>