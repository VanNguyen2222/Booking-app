<template>
  <div>
    <v-img :src="{ src }" :class="{ logoClass }"></v-img>
  </div>
</template>

<script>
export default {
  name: 'LogoApp',
  props: {
    logoClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      src: require('@/assets/image/logo.png'),
    }
  },
}
</script>

<style lang="scss" scoped></style>
