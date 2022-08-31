<template>
  <v-form v-model="valid">
    <div>
      <h1 class="font-bold text-2xl text-[#170F49]">
        What’s your project budget?
      </h1>
      <strong class="font-normal text-lg text-[#6F6C90]"
        >Please select the project budget range you have in mind.</strong
      >
      <div class="flex flex-wrap justify-between">
        <div
          v-for="item in items"
          :key="item.key"
          class="lg:w-[284px] w-full h-[90px] lg:h-[114px] mt-[39px] rounded-2xl shadow-sm pl-[26px] border-[1px] border-solid border-[#EFF0F7]"
          :class="{
            ' border-[2px] border-[#4A3AFF] ': item.key === budget,
          }"
          @click="handleClick(item.key)"
        >
          <div class="flex items-center w-full h-full flex-wrap">
            <div
              :class="{
                'border-[8px] border-solid border-[#4A3AFF]':
                  item.key === budget,
              }"
              class="w-[25px] h-[25px] rounded-full bg-[#ffffff] border-[1px] border-solid shadow-xl"
            ></div>
            <strong class="ml-[12px] text-lg text-[#170F49]">{{
              item.title
            }}</strong>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'BudgetPage',
  data() {
    return {
      valid: false,
      budget: 0,
      items: [
        {
          key: 1,
          title: '$5.000 - $10.000',
          value: 'radio1',
          isCheck: false,
        },
        {
          key: 2,
          title: '$10.000 - $20.000',
          value: 'radio2',
          isCheck: false,
        },
        {
          key: 3,
          title: '$20.000 - $50.000',
          value: 'radio3',
          isCheck: false,
        },
        {
          key: 4,
          title: '$50.000 +',
          value: 'radio4',
          isCheck: false,
        },
      ],
    }
  },
  methods: {
    handleClick(key) {
      if (key) {
        this.budget = key
        this.valid = true
      }
      this.$emit('budgetCheck', this.budget)
    },
  },
}
</script>

<style lang="scss" scoped></style>
