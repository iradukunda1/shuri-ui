<template>
  <div class="newCompany">
    <div class="headerPart">
      <span class="back">
        <i class="fa fa-arrow-left" @click="$router.go(-1)"></i>
      </span>
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
            <input type="number" name="phoneNumber" />
          </div>
          <div class="flagField">
            <div class="flag">
              <img src="flag.png" alt="flag" />
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
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/createCompany.scss";

</style>