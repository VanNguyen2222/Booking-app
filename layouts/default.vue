<template>
  <v-app>
    <HeaderApp></HeaderApp>
    <div class="justify-center items-center m-auto mt-[51px] mb-[100px]">
      <FormBooking></FormBooking>
    </div>
    <FooterApp></FooterApp>
  </v-app>
</template>

<script>
import FooterApp from './components/footer.vue'
import HeaderApp from './components/header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    FooterApp,
    HeaderApp,
  },
}
</script>
