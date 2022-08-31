<template>
  <v-form >
    <div
      class="w-full border border-solid border-[#EFF0F7] rounded-[34px] lg:h-[606px] h-[700px] shadow-sx items-center mt-[42px] sm:px-[51px] sml:px-[20px] px-[10px] flex sx:flex-row lg:flex-col sm:justify-between"
    >
      <StepApp :step="step"></StepApp>
      <div class="h-[1px] w-full bg-[#D9DBE9] mb-[64px] hidden lg:flex"></div>
      <div class="lg:h-[362px] lg:mb-[60px] lg:w-full">
        <KeepAlive>
          <component
            :is="items[step]"
            @projectValues="handleProjectValues"
            @serviceCheck="handleServiceCheck"
            @budgetCheck="handleBudgetCheck"
            @handleSubmit="handleSubmit"
          ></component>
        </KeepAlive>
      </div>
    </div>
    <ErrorMessage :content="message" :is-show="message !== ''"></ErrorMessage>
    <div class="flex justify-between flex-col sm:flex-row">
      <ButtonApp
        title="Previous step"
        :is-show="step !== 0"
        btn-class="h-[60px] sm:w-[192px] w-full bg-white text-[#4A3AFF] float-left mt-[31px]"
        @handleClick="handlePrev()"
      ></ButtonApp>
      <ButtonApp
        title="Next step"
        :is-show="step !== 3"
        btn-class="h-[61px] sm:w-[192px] w-full bg-[#4A3AFF] text-[#ffffff] float-right mt-[31px]"
        @handleClick="handleNext()"
      ></ButtonApp>
    </div>
  </v-form>
</template>
<script>
import ProjectPage from '~/layouts/components/project.vue'
import BudgetPage from '~/layouts/components/budget.vue'
import ServicePage from '~/layouts/components/service.vue'
import EndPage from '~/layouts/components/end.vue'
import ButtonApp from '~/components/buttonApp.vue'
import ErrorMessage from '~/layouts/components/errorMessage.vue'
import StepApp from '~/components/stepApp.vue'
export default {
  name: 'IndexPage',
  components: {
    ProjectPage,
    BudgetPage,
    ServicePage,
    EndPage,
    ButtonApp,
    ErrorMessage,
    StepApp,
  },
  data() {
    return {
      step: 0,
      items: ['ProjectPage', 'ServicePage', 'BudgetPage', 'EndPage'],
      dataForm: {
        projectData: {
          name: '',
          email: '',
          phoneNumber: '',
          company: '',
        },
        service: 0,
        budget: 0,
      },
      message: '',
    }
  },
  methods: {
    handleNext() {
      if (this.step >= 3) return
      switch (this.step) {
        case 0:
          if (
            !this.dataForm.projectData.phoneNumber ||
            !this.dataForm.projectData.email ||
            !this.dataForm.projectData.name ||
            !this.dataForm.projectData.company
          ) {
            this.message = 'Please enter fill input'
            break
          }
          this.step++
          this.message = ''
          break
        case 1:
          if (!this.dataForm.service) {
            this.message = 'Please choose a service'
            break
          }
          this.step++
          this.message = ''
          break

        case 2:
          if (!this.dataForm.budget) {
            this.message = 'Please choose a budget'
            break
          }
          this.step++
          this.message = ''
          break
        default:
          break
      }
    },
    handlePrev() {
      if (this.step <= 0) return
      this.step--
      this.message = ''
    },
    handleProjectValues(e) {
      this.dataForm.projectData = { ...this.dataForm.projectData, ...e }
    },
    handleServiceCheck(e) {
      this.dataForm.service = e
    },
    handleBudgetCheck(e) {
      this.dataForm.budget = e
    },
    handleSubmit() {},
  },
}
</script>
