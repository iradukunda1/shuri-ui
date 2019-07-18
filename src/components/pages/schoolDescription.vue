<template>
  <div class="schoolDetails">
    <div class="dateField">
      <p class="createdDate">Created On Feb by : <b>Shuri Dev</b></p>
    </div>
    <div class="schoolContainer">
      <div class="schoolInfo">
        <div class="profileHead">
          <p>School Information</p>
          <i class="fa fa-caret-down" v-show="showProfileInfo" @click="showProfileInfo=false"></i>
          <i class="fa fa-caret-up" v-show="!showProfileInfo" @click="showProfileInfo=true"></i>
        </div>
        <div class="profileInfo" v-show="showProfileInfo">
          <div class="partOne" >
            <li class="title">Description :</li>
            <p
              class="data"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, in suscipit soluta voluptate rerum ex perspiciatis iusto odit enim dolorum quo.</p>
            <li class="title">Country :</li>
            <li class="data">Rwanda</li>
            <li class="title">District :</li>
            <li class="data">Kicukiro</li>
          </div>
          <ul class="partTwo">
            
            <li class="title">Sector :</li>
            <li class="data">Kimironko</li>
            <li class="title">Email :</li>
            <li class="data">shejaeddy05@gmail.com</li>
            <li class="title">Phone Number :</li>
            <li class="data">0784141587</li>
            <li class="title">Geo Location :</li>
            <li class="data">1.234565</li>
            <li class="data">0.7657897</li>
          </ul>

        <div class="schoolStatics">
          <div class="profileHead">
            <p>Statistics</p>
            <i class="fa fa-caret-down" v-show="showStatsInfo" @click="showStatsInfo=false"></i>
            <i class="fa fa-caret-up" v-show="!showStatsInfo" @click="showStatsInfo=true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "schoolProfile",
  data(){
    return{
      showStatsInfo:true,
      showProfileInfo:true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/schoolDescription.scss";
</style>

