import Vue from "vue";
import vueRouter from "vue-router";
import layout from "../components/layout/dashboardLayout.vue";
import companies from "../components/pages/companies.vue";
import schools from "../components/pages/schools.vue";
import dashboard from "../components/pages/dashboard.vue";
import createCompany from "../components/pages/createCompany.vue";
import createSchool from "../components/pages/createSchool.vue";
import login from "../components/pages/login.vue";
import notFoundPage from "../components/pages/404Page.vue";
import schoolProfile from "../components/pages/schoolDescription.vue";


Vue.use(vueRouter);

const router = new vueRouter({
  mode: "history",
  routes: [
    {
      path: "/shuriDash",
      redirect: "/home",
      component: layout,
      children: [
        {
          name: "Home",
          path: "/home",
          component: dashboard
        },
        {
          name: "Schools",
          path: "/schools",
          component: schools
        },
        {
          name: "Companies",
          path: "/companies",
          component: companies
        },
        {
          name: "School Profile",
          path: "/schoolProfile",
          component: schoolProfile
        }
      ]
    },
    {
      name: "Create New Company",
      path: "/createCompany",
      component: createCompany
    },
    {
      name: "Create New School",
      path: "/createSchool",
      component: createSchool
    },
    {
      name: "Login",
      path: "/",
      component: login
    },
    {
      path: "*",
      component: notFoundPage
    }
  ]
});
export default router;
