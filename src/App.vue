<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
    <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider v-if="token" bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu :options="menuOptions" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-side="22"></n-menu>
      </n-layout-sider>
        <n-layout bordered>
          <div class="main">
            <n-space>
              <n-layout v-if="token" >
                <n-layout-header bordered style="width:100vw; padding: 12px">
                  <n-image src width="150"></n-image>
                </n-layout-header>
              </n-layout>
            </n-space>
            <router-view/>
          </div>
        </n-layout>
      </n-layout>
  </n-space>
</n-message-provider>
  </n-config-provider>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { darkTheme } from 'naive-ui'
import { ref } from "vue";
import { RouterLink } from "vue-router";
  import { NIcon } from 'naive-ui';
  import { h } from 'vue'
  import {
    Briefcase,
    Clipboard,
    BarChart,
    Cog,
    Person,
    LogOut,
    Wallet
  } from "@vicons/ionicons5";

  function renderIcon (icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
  }
  const menuOptions = [
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "SalesView",
          }
        },
        { default: () => "Sales" }
      ),
      key: "sales",
      icon: renderIcon(Wallet)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "ClientsView",
          }
        },
        { default: () => "Clients" }
      ),
      key: "clients",
      icon: renderIcon(Briefcase)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "InventoryView",
          }
        },
        { default: () => "Inventory" }
      ),
      key: "inventory",
      icon: renderIcon(Clipboard)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "InsightsView",
          }
        },
        { default: () => "Insights" }
      ),
      key: "insights",
      icon: renderIcon(BarChart)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "AutomationsView",
          }
        },
        { default: () => "Automations" }
      ),
      key: "automations",
      icon: renderIcon(Cog)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "ProfileView",
          }
        },
        { default: () => "Profile" }
      ),
      key: "profiles",
      icon: renderIcon(Person)
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: "LoginView",
          }
        },
        { default: () => "Logout" }
      ),
      key: "logout",
      icon: renderIcon(LogOut)
    },
  ]

export default {
  components: { NavBar},
  setup() {
    const token = ref(localStorage.getItem('token'))
    return{darkTheme, menuOptions, token}
  }
};

</script>

<style>
  .main {
    min-height: 100vh;
  }
</style>
