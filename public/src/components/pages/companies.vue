<template>
  <div class="company">
    <div class="recent">
      <p>Recent Bus Companies</p>
    </div>

    <div class="list" v-for="(recent,index) in recents" :key="index">
      <div class="companiesList">
        <span :style="{background:recent.logo}" class="companyLogo"></span>
        <p class="companyName">{{recent.name}}</p>
        <span class="createdDate">Created: {{recent.createdDate}}</span>
        <b-dropdown id="dropdown-left" class="moreDot" no-caret>
          <template slot="button-content">
            <i class="fa fa-ellipsis-h dot"></i>
          </template>
          <b-dropdown-item>Edit Company</b-dropdown-item>
          <b-dropdown-item>
            <span style="color:red">Move To Trash</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/style/company.css";
export default {
  name: "company",
  data() {
    return {
      bg: "",
      recentHovered: "",
      recents: [
        {
          name: "Volcanoes",
          logo: "blue",
          createdDate: "09 june 2010"
        },
        {
          name: "Student Safety",
          logo: "orange",
          createdDate: "08 june 2019",
          option: "more2"
        },
        {
          name: "Hope Cooperative",
          logo: "yellow",
          createdDate: "02 june 2014"
        },
        {
          name: "STES School Bus",
          logo: "darkblue",
          createdDate: "22 june 2018"
        },
        {
          name: "Sanitation Cooperative",
          logo: "red",
          createdDate: "28/08/2016"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss">
</style>
