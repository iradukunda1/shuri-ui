<template>
  <div :style="screenMonitor.sidebar" class="sidebar">
    <div class="sidebarToggler" @click="toggleSidebar()">
      <i class="fa fa-bars"></i>
    </div>
    <div class="normal">
      <div class="sidebarHeader">
        <img :src="logo" alt="Logo" />&nbsp;
        <p>ShuriDash</p>
      </div>

      <router-link to="/home" class="sidebarLink">
        <div class="routeLink" :style="screenMonitor.routeLink" @click="go()">
          <i class="fa fa-home"></i>&nbsp;
          <p :style="screenMonitor.routerName">Home</p>
        </div>
      </router-link>
      <div class="schoolItems">
        <div class="ListTitle" v-b-toggle.collapse-4 @click="showSchools=!showSchools">
          <p class="mainTitle">
            Schools
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
              @click="$router.push('/schoolProfile'),go()"
            >
              <span :style="{background:school.logo}"></span>
              <p>{{school.name}}</p>
            </div>
          </div>
          <p
            v-show="!showAllSchools"
            class="more"
            v-b-toggle.collapse-5
            @click="showAllSchools=true"
          >Show More</p>
          <b-collapse id="collapse-5">
            <div>
              <p class="all" @click="$router.push('/schools'),go()">All Items</p>
              <p class="more" @click="showAllSchools=false" v-b-toggle.collapse-5>Show Less</p>
            </div>
          </b-collapse>
        </b-collapse>
      </div>
      <div class="companyItems">
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
              @click="$router.push('/companyProfile'),go()"
            >
              <span :style="{background:company.logo}"></span>
              <p>{{company.name}}</p>
            </div>
          </div>
          <b-collapse id="collapse-6">
            <div>
              <p class="all" @click="$router.push('/companies'),go()">All Items</p>
              <p class="more" v-b-toggle.collapse-6 @click="showAllCompanies=false">Show Less</p>
            </div>
          </b-collapse>
          <p
            v-show="!showAllCompanies"
            v-b-toggle.collapse-6
            class="more"
            @click="showAllCompanies=true"
          >Show More</p>
        </b-collapse>
      </div>
    </div>
    <div class="mobile" :style="screenMonitor.mobile">
      <div class="sidebarLink_mobile">
        <router-link to="/home" class="home_icon">
          <i class="sidebarLink_mobile_home fa fa-home"></i>
        </router-link>
        <router-link to="/schools" class="school_icon">
          <span class="sidebarLink_mobile_school iconify" data-icon="fa-solid:school" data-inline="false"></span>
        </router-link>
         <router-link to="/companies" class="company_icon">
          <i class="sidebarLink_mobile_company fa fa-bus"></i>
        </router-link>
      </div>
      
    </div>
  </div>
</template>
<script >
import "../../assets/style/sidebar.scss";
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
      if (window.innerWidth <= 800) {
        this.screenMobile();
      } else {
        this.screenNormal();
      }
    },
    go() {
      if (window.innerWidth <= 800) {
        this.screenMobile();
      }
    },
    screenMobile() {
      if (
        this.screenMonitor.sidebarState === "hide" ||
        this.screenMonitor.sidebarState === ""
      ) {
        
        this.$store.dispatch("finalToggler");
      } else {        
        this.$store.dispatch("initialToggler");
        
      }
    },
    screenNormal() {
      if (
        this.screenMonitor.sidebarState === "show" ||
        this.screenMonitor.sidebarState === ""
      ) {
        this.$store.dispatch("initialToggler");
      } else {
        this.$store.dispatch("finalToggler");
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