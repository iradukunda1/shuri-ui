<template>
  <div class="newCompany">
    <div class="headerPart">
      <span class="cancel">
        <i class="fa fa-close" @click="$router.go(-1)"></i>
      </span>
    </div>
    <div class="bodyPart">
      <form @submit.prevent="newCompany" class="form">
        <p class="title">Add Bus Company Details</p>
        <div class="name">
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="phoneNumber">
          <label for="phoneNumber">Phone Number</label>
          <div class="phoneInput">
            <p>(+{{codeNum}})</p>
            <input type="number" name="phoneNumber" v-model="number"/>
          </div>
          <div class="flagField">
            <div class="flag">
              <b-dropdown id="dropdown-right" variant="primary" class="newBtn" no-caret offset="-50">
              <template slot="button-content">
                 <img :src="flagNum" alt="" />
              </template>
              <b-dropdown-item @click="codeNum='250'">
                <i class="fa fa-flag"></i>  Rwanda
              </b-dropdown-item>
              <b-dropdown-item @click="codeNum='243'">
                <i class="fa fa-flag-checkered"></i>  Congo
              </b-dropdown-item>
              <b-dropdown-item @click="codeNum='230'">
                <i class="fa fa-flag-o"></i>  Uganda
              </b-dropdown-item>
            </b-dropdown>
            </div>
            
          </div>
        </div>
        <div class="country">
          <label for="country">Country</label>
          <select name="country">
            <option value disabled selected>select country</option>
            <option value="rwanda">Rwanda</option>
            <option value="canada">Canada</option>
          </select>
        </div>
        <div class="district">
          <label for="district">District</label>
          <select name="district">
            <option value disabled selected>select district</option>
            <option value="gasabo">Gasabo</option>
            <option value="kicukiro">Kicukiro</option>
          </select>
        </div>
        <div class="submit">
          <button name="submit">Create Company</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createCompany",
  props: [],
  computed: {},
  data(){
    return{
      flagNum:"flag.png",
      codeNum:"250"
    }
  }
};
</script>
<style>
#dropdown-right__BV_toggle_{
  background: none;
  height: 25px;
  width:25px;
  border:none;
}
#dropdown-right__BV_toggle_:focus{
 box-shadow:none;
}
</style>

<style lang="scss" scoped>
@import "../../assets/style/createCompany.scss";

</style>