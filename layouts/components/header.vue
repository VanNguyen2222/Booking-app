<template>
  <div
    class="h-[126px] w-full lg:px-[99px] px-[20px] flex sm:justify-between smx:justify-center items-center sm:flex-row flex-col"
  >
    <div class="xs:w-[304px] h-[40px] w-full">
      <LogoApp logo-class="w-full h-full"></LogoApp>
    </div>
    <ButtonApp
      title="Clone now"
      btn-class="h-[49px] w-[171px] bg-[#4A3AFF] text-[#ffffff]"
    ></ButtonApp>
  </div>
</template>

<script>
import ButtonApp from '../../components/buttonApp.vue'
import LogoApp from '../../components/NuxtLogo.vue'
export default {
  name: 'HeaderApp',
  components: {
    ButtonApp,
    LogoApp,
  },
}
</script>

<style lang="scss" scoped></style>
