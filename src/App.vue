<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div>hello world</div>
  </header>
  <Home/>
  <CreateHook/>
  <MountHook/> 
  <TwoWayBinding/>
  <GetInputValue/> -->
  <ParentProps/>
  <!-- <ChildProps/> -->
  <!-- <PracticeProps/>
  <Modal/> -->
</template>

<script>
// import Home from "./components/Home.vue";
// import CreateHook from "./components/CreateHook.vue";
// import MountHook from "./components/MountHook.vue";
// import TwoWayBinding from "./components/TwoWayBinding.vue";
// import GetInputValue from "./components/GetInputValue.vue";
// import ChildProps from "./components/ParentProps.vue";
// import PracticeProps from "./components/PracticeProps.vue";
// import Modal from "./components/Modal.vue";
import ParentProps from "./components/ParentProps.vue";

export default {
  name: 'App',
  components: {
    // Home,
    // CreateHook,
    // MountHook,
    ParentProps,
    // TwoWayBinding,
    // GetInputValue,
    // ChildProps,
    // PracticeProps,
    // Modal
  }
}
</script>
