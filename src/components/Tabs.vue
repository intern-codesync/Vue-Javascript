<template>
  <div>
    <div class="rounded border w-1/2 mx-auto mt-4">
      <ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
        <li
          v-for="tab in tabsData"
          :key="tab.id"
          :class="{ 'bg-[red]': currentTab === tab.id }"
        >
          <router-link :to="'/tabs/' + tab.id" @click="setCurrentTab(tab.id)">{{
            tab.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="currentTab === '1'">
        Content for Tab 1: {{ getTabContent("1") }}
      </div>
      <div v-else-if="currentTab === '2'">
        Content for Tab 2: {{ getTabContent("2") }}
      </div>
      <div v-else-if="currentTab === '3'">
        Content for Tab 3: {{ getTabContent("3") }}
      </div>
      <div v-else-if="currentTab === '4'">
        Content for Tab 4: {{ getTabContent("4") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("");
const tabsData = [
  { id: "1", title: "Tab 1", content: "i m first" },
  { id: "2", title: "Tab 2", content: "i m second" },
  { id: "3", title: "Tab 3", content: "i m third" },
  { id: "4", title: "Tab 4", content: "i m fourth" },
];

const setCurrentTab = (tabId) => {
  currentTab.value = tabId;
};

const getTabContent = (tabId) => {
  const tab = tabsData.find((tab) => tab.id === tabId);
  return tab ? tab.content : "";
};
</script>
<style scoped>
ul li {
  padding: 12px;
}
</style>