<template>
  <div
    v-if="isShow"
    class="w-full bg-[pink] rounded-2xl px-5 py-2 text-center my-[20px]"
  >
    <strong rounded class="text-[red] font-light">
      {{ content }}
    </strong>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    content: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
v-btn {
  font-family: 'DM Sans', sans-serif;
}
</style>
