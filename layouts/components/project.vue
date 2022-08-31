<template>
  <v-form v-model="valid">
    <div>
      <h1 class="font-bold text-2xl text-[#170F49]">Contact details</h1>
      <strong class="font-normal text-lg text-[#6F6C90]"
        >Lorem ipsum dolor sit amet consectetur adipisc.</strong
      >
      <div class="flex flex-wrap justify-between">
        <InputApp
          name="name"
          :value-rules="nameRules"
          placeholder="John Carter"
          title="Name"
          :value="formValues.name"
          icon="UserIcon"
          @handleChange="handleChange"
        ></InputApp>
        <InputApp
          name="email"
          :value-rules="emailRules"
          placeholder="Email address"
          title="Email"
          :value="formValues.email"
          icon="LetterIcon"
          @handleChange="handleChange"
        ></InputApp>
        <InputApp
          name="phoneNumber"
          :value-rules="phoneNumberRules"
          placeholder="123) 456 - 7890"
          title="Phone Number"
          :value="formValues.phoneNumber"
          icon="PhoneIcon"
          @handleChange="handleChange"
        ></InputApp>
        <InputApp
          name="company"
          :value-rules="companyRules"
          placeholder="Company name"
          title="Company"
          :value="formValues.company"
          icon="CompanyIcon"
          @handleChange="handleChange"
        ></InputApp>
      </div>
    </div>
  </v-form>
</template>
<script>
import InputApp from '~/components/inputApp.vue'
export default {
  name: 'ProjectPage',
  components: {
    InputApp,
  },
  data() {
    return {
      valid: false,
      formValues: {
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
      },
      nameRules: [(v) => !!v || 'Name is required'],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid',
      ],
      phoneNumberRules: [
        (v) => !!v || 'Phone number is required',
        (v) =>
          /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(v) ||
          'Phone number must be valid',
      ],
      companyRules: [(v) => !!v || 'Company is required'],
    }
  },
  methods: {
    handleChange(data) {
      this.formValues = { ...data }
      this.$emit('projectValues', this.formValues)
    },
  },
}
</script>
