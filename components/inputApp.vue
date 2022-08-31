<template>
  <div class="lg:mt-[25px] sm:mt-0">
    <p class="text-[#170F49] mb-[18px]">{{ title }}</p>
    <div class="relative">
      <v-text-field
        v-model="value"
        solo
        :name="name"
        required
        height="66px"
        :placeholder="placeholder"
        :rules="valueRules"
        class="lg:w-[284px] rounded-full md:w-[500px] sm:w-[400px] xs:w-[300px] sml:w-[400px] smx:w-[280px] w-full"
        @change="handleChange()"
      >
      </v-text-field>
      <component :is="icon" class="absolute top-5 right-4"></component>
    </div>
  </div>
</template>

<script>
import UserIcon from './icon/userIcon.vue'
import LetterIcon from './icon/letterIcon.vue'
import PhoneIcon from './icon/phoneIcon.vue'
import CompanyIcon from './icon/companyIcon.vue'
import ErrorMessage from '~/layouts/components/errorMessage.vue'
export default {
  name: 'InputApp',
  components: {
    UserIcon,
    LetterIcon,
    PhoneIcon,
    CompanyIcon,
    ErrorMessage,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },

    message: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    valueRules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    handleChange() {
      this.$emit('handleChange', { [this.name]: this.value })
    },
  },
}
</script>

<style lang="scss" scoped></style>
