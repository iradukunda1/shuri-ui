<template>
  <div class="navbar">
    <div class="routeTitle">
      <div
        class="sidebarToggler"
        :style="{display:screenMonitor.hideToggler}"
        @click="toggleSidebar"
      >
        <i class="fa fa-bars"></i>
        <i class="fa fa-caret-right"></i>
      </div>
      <p :style="screenMonitor.routeNameStyles" v-if="$route.path!=='/schoolProfile'">{{$route.name}}</p>
      <div v-if="$route.path=='/schoolProfile'" class="schoolProfileNav">
      <span class="logo"></span>
      <div class="schoolTitle">
        <p>Apapec-Irebero</p>
        <i class="fa fa-caret-down"></i>
      </div>
      <div class="Options">
        <ul>
          <li class="li1">Home</li>
          <li class="li2">Students</li>
          <li class="li3">Employees</li>
        </ul>
      </div>

      
      </div>
    </div>
    <div class="new">
      <b-dropdown id="dropdown-right" variant="primary" class="newBtn" offset="-50" no-caret>
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
        offset="-120"
        class="profileItem"
        variant="primary"
        no-caret
        size="sm"
      >
        <template slot="button-content">My</template>
        <b-dropdown-item>
          <b>Sheja Eddy</b>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>My Profile Setting</b-dropdown-item>
        <b-dropdown-item @click="$router.push('/')">Logout</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>
<script >
export default {
  name: "navbar",
  components: {},
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("sidebarCycle");
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
      console.log(this.screenMonitor)
    }
  }
};
</script>
<style>
.showSidebar {
  margin-left: 0;
}
.showSidebarForce {
  margin-left: 0 !important;
}
#dropdown-right__BV_toggle_{
  border:none;
}
</style>
<style>
@import "../../assets/style/navbar.scss";
</style>
