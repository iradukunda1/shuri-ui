<template>
  <div class="navbar" :style="pushNavbar" @click="hideSidebar()">
    <div class="routeTitle">
      <div
        class="sidebarToggler"
        :style="{display:$store.state.hideToggler}"
        @click="toggleSidebar">
      
        <i class="fa fa-bars"></i>
        <i class="fa fa-caret-right"></i>
      </div>
      <p :style="$store.state.togglerStyles">{{$route.name}}</p>
    </div>
    <div class="new">
      <b-dropdown id="dropdown-right" variant="primary" class="newBtn" no-caret>
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
          <b>shuri Dev</b>
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
    return {
      pushNavbar:"0"
    };
  },
  created() {
    window.onresize = () => {
      if (window.innerWidth > 800) {
        this.$store.state.sidebarStyle = "showSidebar";
        this.$store.state.togglerStyles = "";
        this.$store.state.hideToggler = "none";
      } else {
        this.$store.state.hideToggler = "none";
        this.$store.state.togglerStyles = "";
      }
    };
  },
  methods: {
    toggleSidebar() {
      if (window.innerWidth > 800) {
        this.$store.state.showSidebar = "show";
        this.$store.state.togglerStyles = "";
        this.$store.state.sidebarStyle = "showSidebar";
        this.$store.state.hideToggler = "none";
      } else {
        this.$store.state.hideToggler = "none !important";
        this.$store.state.showSidebar = "show";
        this.$store.state.togglerStyles =
          "position: absolute;top: 18px;left:16px";

        this.$store.state.sidebarStyle = "showSidebarForce";
      }
    },
    hideSidebar(){
      if(window.innerWidth < 800){
        this.$store.state.hideToggler = "none !important";
        this.$store.state.showSidebar = "show";
        this.$store.state.togglerStyles =
          "position: absolute;top: 18px;left:16px";

        this.$store.state.sidebarStyle = "showSidebarForce";
      }
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
</style>
<style>
@import "../../assets/style/navbar.css";
</style>
