<template>
  <div
    class="lg:h-[138px] w-full border flex py-[57px] lg:flex-row lg:px-[99px] sm:px-[50px] flex-col items-center justify-between"
  >
    <div
      class="w-full flex flex-col lg:justify-start lg:items-start justify-center items-center"
    >
      <div class="w-[262px] h-[34px]">
        <LogoApp logo-class="w-full h-full"></LogoApp>
      </div>

      <strong
        class="font-normal text-[#6F6C90] text-lg mt-[17px] text-center sm:text-start"
        >Copyright © 2021 BRIX Templates | All Rights Reserved</strong
      >
    </div>
    <div
      class="relative h-[73px] w-full flex items-center lg:justify-end justify-center"
    >
      <input
        class="w-full lg:w-[507px] h-full shadow-[0_8px_25px_0_rgba(13, 10, 44, 0.06)] rounded-[60px] px-[31px] border border-solid outline-none"
        placeholder="Enter email"
      />
      <ButtonApp
        title="Subscribe"
        btn-class="h-[49px] w-[129px] right-[16px] top-[12px] absolute bg-[#4A3AFF] text-[#ffffff]"
      ></ButtonApp>
    </div>
  </div>
</template>

<script>
import ButtonApp from '../../components/buttonApp.vue'
import LogoApp from '../../components/NuxtLogo.vue'
export default {
  name: 'FooterApp',
  components: {
    ButtonApp,
    LogoApp,
  },
}
</script>
<style lang="scss" scoped>
p {
  font-family: 'DM Sans', sans-serif;
}
</style>
