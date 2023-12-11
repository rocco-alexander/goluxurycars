<template>
  <n-space vertical style="height:100%">
    <n-layout has-sider style="height:100%">
      <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu :options="menuOptions" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-side="22"></n-menu>
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>
  
<script>
  import { RouterLink, useRouter } from "vue-router";
  import { NIcon } from 'naive-ui';
  import { h } from 'vue'
  import {
    Briefcase,
    Clipboard,
    BarChart,
    Cog,
    Person,
    LogOut
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
  ]

  export default {
    setup() {
      return { menuOptions }
    },
  };
</script>