<template>
  <div class="newSchool">
    <div class="headerPart">
      <span class="back">
        <i class="fa fa-arrow-left" @click="$router.go(-1)"></i>
      </span>
      <span class="cancel">
        <i class="fa fa-close" @click="$router.go(-1)"></i>
      </span>
    </div>
    <div class="bodyPart">
      <form @submit.prevent="newSchool" class="form">
        <p class="title">Add School Details</p>
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
        <div>
          <p>Add Geo Location</p>
        </div>
        <div class="submit">
          <button name="submit">Create School</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createSchool",
  props: [],
  computed: {}
};
</script>

<style scoped>

.newSchool {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas: "headerPart" "bodyPart";
}
.headerPart {
  grid-area: headerPart;
  padding: 15px;
}

.bodyPart {
  grid-area: bodyPart;
  font-family: sans-serif;
}
.form {
  width: 30%;
  height: auto;
  margin: auto;
}
.headerPart .back {
  float: left;
}
.headerPart i {
  font-size: 30px;
  cursor: pointer;
}
.headerPart i:hover {
  color: lightgray;
}
.headerPart .cancel {
  float: right;
}
.bodyPart .title {
  font-weight: 600;
  font-size: 20px;
}
.bodyPart .form label {
  font-size: 13px;
  display: block;
  margin-bottom: 10px;
  color: grey;
}
.bodyPart .form div {
  margin-bottom: 20px;
}
.form input {
  height: 33px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
}
.phoneNumber {
  position: relative;
}
.phoneNumber .flagField {
  position: absolute;
  width: 37px;
  height: 26px;
  top: 32.5px;
  left: 2px;
  padding-left: 5px;
  border-right: 1px solid grey;
}
.phoneNumber .flag img {
  width: 100%;
  height: auto;
}
.phoneNumber .flag {
  width: 25px;
  height: 25px;
  background: yellow;
}
.phoneNumber .phoneInput {
  position: relative;
  height: 34px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
}
input[type="number"] {
  position: absolute;
  height: 30px;
  border: none;
  width: 90.4%;
  left: 39px;
  top: 1px;
  height: 30px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.form select {
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
}
.form div p {
  font-size: 17px;
  color: #14aaf5;
}
.form button {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: none;
  background: #14aaf5;
  color: white;
  cursor: pointer;
  font-size: 17px;
}
</style>