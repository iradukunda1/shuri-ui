<template>
  <div :style="screenMonitor.sidebar" class="sidebar">
    <div class="sidebarHeader" :style="screenMonitor.sidebarHeader">
      <img :src="logo" alt="Logo" />&nbsp;
      <p>ShuriDash</p>
    </div>
    <span class="sidebarToggler" @click="toggleSidebar()" :style="screenMonitor.sidebarToggler">
      <i class="fa fa-bars"></i>
    </span>

    <router-link to="/home" class="sidebarLink" >
      <div class="routeLink" :style="screenMonitor.routeLink" @click="toggleSidebar()" >
        <i class="fa fa-home"></i>&nbsp;
        <p :style="screenMonitor.routerName">Home</p>
      </div>
    </router-link>
    <div class="schoolItems" :style="screenMonitor.schoolItems">
      <div class="ListTitle" v-b-toggle.collapse-4 @click="showSchools=!showSchools">
        <p class="mainTitle">Schools
        <span>
            <i class="fa fa-caret-down" v-show="showSchools"></i>
            <i class="fa fa-caret-up" v-show="!showSchools"></i>
          </span>
          </p>
      </div>
      <b-collapse visible id="collapse-4">
         <div class="schoolList">
          <div
            class="items"
            v-for="(school,index) in schools"
            :key="index"
            @click="$router.push('/schoolProfile'),toggleSidebar()"
          >
            <span :style="{background:school.logo}"></span>
            <p>{{school.name}}</p>
          </div>
        </div>
        <p v-show="!showAllSchools" class="more" v-b-toggle.collapse-5 @click="showAllSchools=true">Show More</p>
        <b-collapse id="collapse-5">       
        <div>
          <p class="all" @click="$router.push('/schools'),toggleSidebar()">All Items</p>
          <p class="more" @click="showAllSchools=false" v-b-toggle.collapse-5 >Show Less</p>
        </div>
      </b-collapse>

      </b-collapse>
    </div>
    <div class="companyItems" :style="screenMonitor.companyItems">
      <div class="ListTitle" v-b-toggle.collapse-3 @click="showCompanies=!showCompanies">
        <p class="mainTitle">
          Bus Company
          <span>
            <i class="fa fa-caret-down" v-show="showCompanies"></i>
            <i class="fa fa-caret-up" v-show="!showCompanies"></i>
          </span>
        </p>
      </div>
      <b-collapse visible id="collapse-3">
          <div class="companyList">
            <div
              class="items"
              v-for="(company,index) in companies"
              :key="index"
              @click="$router.push('/companyProfile'),toggleSidebar()"
            >
              <span :style="{background:company.logo}"></span>
              <p>{{company.name}}</p>
            </div>
          </div>
        <b-collapse id="collapse-6">
          <div>
            <p class="all" @click="$router.push('/companies'),toggleSidebar()">All Items</p>
            <p class="more" v-b-toggle.collapse-6 @click="showAllCompanies=false" >Show Less</p>
          </div>        
        </b-collapse>
          <p v-show="!showAllCompanies" v-b-toggle.collapse-6 class="more" @click="showAllCompanies=true">Show More</p>
      </b-collapse>
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
      if (this.screenMonitor.sidebarToggler === "") {
        this.$store.dispatch("SideToggler");
      } else {
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