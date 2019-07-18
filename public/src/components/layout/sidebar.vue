<template>
  <div :class="$store.state.sidebarStyle" class="sidebar">
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
      <p class="mainTitle">Schools</p>
      <i v-show="!showSchools" class="fa fa-caret-up" @click="showSchools=true"></i>
      <i v-show="showSchools" class="fa fa-caret-down" @click="showSchools=false,showAllSchools=false"></i>
      <div v-show="showSchools">
      <div class="schoolList">
        <div class="items" v-for="(school,index) in schools" :key="index">
          <span :style="{background:school.logo}"></span>
          <p>{{school.name}}</p>
        </div>
      </div>
      <div v-show="showAllSchools">
        <p class="all" @click="$router.push('/schools')">All Items</p>
        <p
          class="more"
          @click="showAllSchools=false"
        >Show Less</p>
      </div>

      <p
        v-show="!showAllSchools"
        class="more"
        @click="showAllSchools=true"
      >Show More</p>
    </div>
    </div>
    <div class="companyItems">
      <p class="mainTitle">Bus Company</p>
      <i v-show="!showCompanies" class="fa fa-caret-up"  @click="showCompanies=true"></i>
      <i v-show="showCompanies" class="fa fa-caret-down" @click="showCompanies=false"></i>
      <div v-show="showCompanies">
        <div class="companyList" v-show="showCompanies">
        <div class="items" v-for="(company,index) in companies" :key="index">
          <span :style="{background:company.logo}"></span>
          <p>{{company.name}}</p>
        </div>
      </div>
      <div v-show="showAllCompanies">
        <p class="all" @click="$router.push('/companies')">All Items</p>
        <p
          class="more"
          @click="showAllCompanies=false"
        >Show Less</p>
      </div>

      <p
        v-show="!showAllCompanies"
        class="more"
        @click="showAllCompanies=true"
      >Show More</p>
      </div>
      
    </div>
  </div>
</template>
<script >
import "../../assets/style/sidebar.css";
import { setTimeout } from 'timers';
export default {
  name: "sidebar",
  data() {
    return {
      logo: "vue-logo.png",
      showAllSchools: false,
      showSchools:true,
      showCompanies:true,
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
  created() {},
  methods: {
    toggleSidebar() {
      this.$refs.sidebarToggler.style="display:none"
      setTimeout(()=>{
      this.$refs.sidebarToggler.style=""
      },1000)
      this.$store.state.showSidebar = "hide";

      if (window.innerWidth < 800) {
        this.$store.state.hideToggler = "none";
        this.$store.state.togglerStyles =
          "position: absolute;top: 19px;left: 70px;";
        this.$store.state.sidebarStyle = "hideSidebar";
      } else {
        this.$store.state.hideToggler = "inherit";
        this.$store.state.togglerStyles =
          "position: absolute;top: 19px;left: 70px;";
        this.$store.state.sidebarStyle = "hideSidebar";
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