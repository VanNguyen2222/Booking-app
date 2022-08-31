<template>
  <div class="flex flex-col items-center justify-center sm:h-full">
    <div class="w-[157px] h-[143px]">
      <v-img :src="require('@/assets/image/end.png')"></v-img>
    </div>
    <h1 class="font-bold text-2xl text-[#170F49] mt-[18px] text-center">
      Submit your quote request
    </h1>
    <strong
      class="font-normal text-lg text-[#6F6C90] md:w-[494px] w-full text-center px-[10px] leading-[30px]"
      >Please review all the information you previously typed in the past steps,
      and if all is okay, submit your message to receive a project quote in 24 -
      48 hours.</strong
    >
    <ButtonApp
      title="Submit"
      btn-class="h-[61px] w-[143px] bg-[#4A3AFF] text-[#ffffff] float-right mt-[31px]"
      @handleClick="handleClick()"
    ></ButtonApp>
  </div>
</template>

<script>
export default {
  name: 'EndPage',
  methods: {
    handleClick() {
      this.$emit('handleSubmit')
    },
  },
}
</script>

<style lang="scss" scoped></style>
