<template>
  <div class="dashlogin">
    <div class="loginNav">
      <div class="icon">
        <img src="vue-logo.png" />
      </div>
      <p>ShuriDash</p>
    </div>
    <div class="loginContent">
      <form class="form" @submit.prevent>
        <p class="loginTitle">Log In</p>
        <div class="emailArea">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="example@email.com" class="email"/>
        </div>
        <div class="passwordArea">
          <label for="password">Password</label>
          <input type="Password" name="Password" placeholder="password" class="password"/>
        </div>
        <div class="forgotPwdArea">
          <router-link to="#" style="cursor:pointer;" class="forgotPwdLink">Forgot Password?</router-link>
        </div>
        <router-link to="/shuriDash">
          <button class="submit">Sign In</button>
        </router-link>
      </form>
    </div>
  </div>
</template>
<script >
export default {};
</script>
<style lang="css" scoped>
@import "../../assets/style/login.css";
</style>


