<template>
  <div class="navbar">
    <div class="routeTitle">
      <p v-if="$route.path!=='/schoolProfile' && $route.path !== '/companyProfile'" class="name">{{$route.name}}</p>

      <school_home_nav v-if="$route.path=='/schoolProfile'"></school_home_nav>
      <company_home_nav v-if="$route.path==='/companyProfile'"></company_home_nav>
    </div>

    <div class="new">
      <b-dropdown id="dropdown-right" variant="primary" class="newBtn" offset="-80" no-caret>
        <template slot="button-content">
          <i class="fa fa-plus"></i>
          <span>New</span>
        </template>
        <b-dropdown-item @click="$router.push('/createSchool')">
          <i class="fa fa-home"></i> School
        </b-dropdown-item>
        <b-dropdown-item @click="$router.push('/createCompany')">
          <i class="fa fa-bus"></i> Bus Company
        </b-dropdown-item>
        <b-dropdown-item>
          <i class="fa fa-user-circle-o"></i> Employee
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="profile">
      <b-dropdown
        id="dropdown-left"
        offset="-130"
        class="profileItem"
        variant="primary"
        no-caret
        size="sm"
      >
        <template slot="button-content">My</template>
        <b-dropdown-item>
          <b>Shuri Dash</b>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>My Profile Setting</b-dropdown-item>
        <b-dropdown-item @click="$router.push('/')">Logout</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script >
import company_home_nav from "./navbar/companyHome.vue";
import school_home_nav from "./navbar/schoolHome.vue";

export default {
  name: "navbar",
  components: {
    company_home_nav,
    school_home_nav
  },
  data() {
    return {
      showAllInfo: true
    };
  },
  created() {
    this.$store.dispatch("screenCycle");
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
      this.$store.dispatch("rightSideToggler");
    }
  }
};
</script>
<style >
.seeOptions #dropdown-left__BV_toggle_ {
  color: black;
  background: none;
  border: none;
}
.seeOptions #dropdown-left__BV_toggle_:focus {
  box-shadow: none;
}
.seeOptions .dropdown-item {
  padding-left: 0;
  padding-right: 0;
}
.dropdown-item {
  font-size: 15px;
  font-family: "Roboto", "sans-serif";
}
</style>
<style lang="scss">
@import "../../assets/style/navbar.scss";
</style>
