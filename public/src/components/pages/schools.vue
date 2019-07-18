<template>
  <div class="school">
    <div class="recent">
      <p>Recent Schools</p>
    </div>
    <div class="list" v-for="(recent,index) in recents" :key="index">
      <div class="schoolsList">
        <span :style="{background:recent.logo}" class="schoolLogo"></span>
        <p class="schoolName">{{recent.name}}</p>
        <span class="createdDate">Created: {{recent.createdDate}}</span>
        <b-dropdown id="dropdown-left" class="moreDot" no-caret>
          <template slot="button-content">
            <i class="fa fa-ellipsis-h dot"></i>
          </template>
          <b-dropdown-item>Edit School</b-dropdown-item>
          <b-dropdown-item>
            <span style="color:red">Move To Trash</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/style/school.css";
export default {
  name: "school",
  data() {
    return {
      recents: [
        {
          name: "Apapec-irebero",
          logo: "blue",
          createdDate: "09 june 2010"
        },
        {
          name: "Green Hills",
          logo: "orange",
          createdDate: "08 june 2019"
        },
        {
          name: "Horizon",
          logo: "yellow",
          createdDate: "02 june 2014"
        },
        {
          name: "Petit prince",
          logo: "darkblue",
          createdDate: "22 june 2018"
        },
        {
          name: "La colombiere",
          logo: "red",
          createdDate: "28 june 2016"
        }
      ]
    };
  }
};
</script>