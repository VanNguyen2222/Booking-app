<template>
  <div>
    <v-btn v-if="isShow" rounded :class="btnClass" @click="handleClick()">
      {{ title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonApp',
  props: {
    title: {
      type: String,
      default: '',
    },
    btnClass: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('handleClick')
    },
  },
}
</script>

<style lang="scss" scoped>
v-btn {
  font-family: 'DM Sans', sans-serif;
}
</style>
