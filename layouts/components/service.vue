<template>
  <v-form v-model="valid">
    <div>
      <h1 class="font-bold text-2xl text-[#170F49]">Our services</h1>
      <strong class="font-normal text-lg text-[#6F6C90]"
        >Please select which service you are interested in.</strong
      >
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="lg:w-[284px] w-full h-[90px] lg:h-[114px] mt-[39px] rounded-2xl border-[2px] border-solid border-[ #4A3AFF] shadow-lg pl-[26px]"
          :class="{
            'border-[#4A3AFF]': item.key == service,
          }"
          @click="handleClick(item.key)"
        >
          <div class="flex items-center w-full h-full flex-wrap">
            <div
              class="bg-[#4A3AFF] relative bg-opacity-[0.15] w-[66px] h-[66px] rounded-full"
            >
              <v-img
                :src="item.icon"
                class="w-[37px] top-4 left-3.5 absolute h-[32px]"
              ></v-img>
            </div>
            <strong class="ml-[12px] text-[#170F49]">{{ item.title }}</strong>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'ServicePage',
  data() {
    return {
      valid: false,
      items: [
        {
          key: 1,
          title: 'Development',
          icon: require('@/assets/image/develop.png'),
          isCheck: false,
        },
        {
          key: 2,
          title: 'Web Design',
          icon: require('@/assets/image/web.png'),
          isCheck: false,
        },
        {
          key: 3,
          title: 'Marketing',
          icon: require('@/assets/image/ring.png'),
          isCheck: false,
        },
        {
          key: 4,
          title: 'Other',
          icon: require('@/assets/image/Setting.png'),
          isCheck: false,
        },
      ],
      service: 0,
    }
  },
  methods: {
    handleClick(key) {
      if (key) {
        this.service = key
        this.valid = true
      }
      this.$emit('serviceCheck', this.service)
    },
  },
}
</script>
