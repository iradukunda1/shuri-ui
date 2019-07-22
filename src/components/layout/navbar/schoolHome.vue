<template>
  <div class="schoolProfileNav">
    <div class="logo">
      <span></span>
    </div>

    <div class="schoolTitle">
      <p>Apapec-Irebero</p>
      <b-dropdown
        id="dropdown-left"
        class="seeOptions"
        :show="true"
        offset="-50"
        @click="showAllInfo = !showAllInfo"      >
       
        <b-dropdown-item>
          <i class="fa fa-pencil"></i> School Details
        </b-dropdown-item>
        <b-dropdown-item>
          <span style="color:red">
            <i class="fa fa-trash"></i> Move To Trash
          </span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="Options">
      <ul>
        <li class="li1">
          <router-link to="/schoolProfile">Home</router-link>
        </li>
        <li class="li2">
          <router-link to="#">Students</router-link>
        </li>
        <li class="li3">
          <router-link to="#">Employees</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllInfo: true
    };
  }
};
</script>
<style lang="scss">
@import "../../../assets/style/school_home_nav.scss ";
</style>
