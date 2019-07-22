<template>
  <div class="companyDetails">
    <div class="dateField">
      <p class="createdDate">
        Created On Feb 20 by :
        <b>Shuri Dev</b>
      </p>
    </div>
    <div class="companyContainer">
      <div class="companyInfo">
        <b-button block v-b-toggle.collapse-1 @click="showProfileInfo=!showProfileInfo">
          <p>Bus Company Information</p>
          <span class="profileCaret">
            <i class="fa fa-caret-down" v-show="showProfileInfo"></i>
            <i class="fa fa-caret-up" v-show="!showProfileInfo"></i>
          </span>
          
        </b-button>
       <b-collapse visible id="collapse-1">
        <div class="profileInfo">
            <b-row>
              <b-col sm="5" md="5">
                <ul class="partOne">
                  <li class="title">Description </li>
                  <li class="data">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                    in suscipit soluta voluptate rerum ex perspiciatis iusto odit enim dolorum quo.
                  </li>
                  <li class="title">Country </li>
                  <li class="data">Rwanda</li>
                  <li class="title">District </li>
                  <li class="data">Kicukiro</li>
                </ul>
              </b-col>
              <b-col sm="5" offset-sm="2" md="5" offset-md="0">
                <ul class="partTwo">
                  <li class="title">Sector </li>
                  <li class="data">Kimironko</li>
                  <li class="title">Email </li>
                  <li class="data">HopeBus@gmail.com</li>
                  <li class="title">Phone Number </li>
                  <li class="data">0784141587</li>
                </ul>
              </b-col>
            </b-row>
        </div>
        </b-collapse>
        <div class="compayStatics">
          <div class="profileHead">
            <b-button block v-b-toggle.collapse-2 @click="showStatsInfo=!showStatsInfo">
              <p>Statistics
              <span>
                <i class="fa fa-caret-down" v-show="showStatsInfo"></i>
                <i class="fa fa-caret-up" v-show="!showStatsInfo"></i> 
              </span>
              </p>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "compayProfile",
  data() {
    return {
      showStatsInfo: true,
      showProfileInfo: true
    };
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 15px 25px;
}
.btn-secondary {
  color: rgb(5, 5, 5) !important;
  background: none !important;
  border: none !important;
  border-bottom: 1px solid #c1c1c1 !important;
  text-align: left !important;
  border-radius: 0 !important;
  height: 50px !important;
  font-family: "Poppins", "sans-serif" !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 17px !important;
  padding-left: 35px !important;
}
.btn-secondary:focus {
  box-shadow: none !important;
}
.btn-secondary span {
  float:right;
  margin-right:20px;
}
</style>

<style lang="scss" scoped>
@import "../../assets/style/companyDescription.scss";
</style>

