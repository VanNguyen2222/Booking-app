<template>
  <div
    class="lg:w-full h-[600px] flex justify-between items-center my-[33px] flex-col lg:flex-row sm:mr-9 mr-5 lg:mr-0"
  >
    <div
      class="rounded-full border border-solid w-[34px] h-[34px] bg-[#4a3aff]"
    >
      <strong
        class="flex justify-center items-center w-full h-full text-[#ffffff]"
        >1</strong
      >
    </div>
    <div
      class="lg:w-[98px] lg:h-[6px] rounded-[40px] bg-[#EFF0F7] w-[6px] h-[90px]"
    >
      <div class="flex w-full h-full flex-col lg:flex-row">
        <div class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#4a3aff]"></div>
        <div
          :class="{ active1: step >= 1 }"
          class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#EFF0F7]"
        ></div>
      </div>
    </div>

    <div
      :class="{ active: step >= 1 }"
      class="rounded-full border border-solid w-[34px] h-[34px] bg-[#EFF0F7]"
    >
      <strong
        :class="{ activeText: step >= 1 }"
        class="flex justify-center items-center w-full h-full text-[#6F6C90]"
        >2</strong
      >
    </div>
    <div
      class="lg:w-[98px] lg:h-[6px] rounded-[40px] bg-[#EFF0F7] w-[6px] h-[90px]"
    >
      <div class="flex w-full h-full flex-col lg:flex-row">
        <div
          :class="{ active2: step >= 1 }"
          class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#EFF0F7]"
        ></div>
        <div
          :class="{ active1: step >= 2 }"
          class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#EFF0F7]"
        ></div>
      </div>
    </div>

    <div
      :class="{ active: step >= 2 }"
      class="rounded-full border border-solid w-[34px] h-[34px] bg-[#EFF0F7]"
    >
      <strong
        :class="{ activeText: step >= 2 }"
        class="flex justify-center items-center w-full h-full text-[#6F6C90]"
        >3</strong
      >
    </div>
    <div
      class="lg:w-[98px] lg:h-[6px] rounded-[40px] bg-[#EFF0F7] w-[6px] h-[90px]"
    >
      <div class="flex w-full h-full flex-col lg:flex-row">
        <div
          :class="{ active2: step >= 2 }"
          class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#EFF0F7]"
        ></div>
        <div
          :class="{ active1: step === 3 }"
          class="lg:w-[50%] lg:h-full h-[50%] w-[6px] bg-[#EFF0F7]"
        ></div>
      </div>
    </div>

    <div
      :class="{ active: step === 3 }"
      class="rounded-full border border-solid w-[34px] h-[34px] bg-[#EFF0F7]"
    >
      <strong
        :class="{ activeText: step === 3 }"
        class="flex justify-center items-center w-full h-full text-[#6F6C90]"
        >4</strong
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepApp',
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style>
@media (min-width: 1024px) {
  @keyframes slidein1 {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes slidein2 {
    from {
      transform: translateX(-25%);
    }

    to {
      transform: translateX(0%);
    }
  }
}
@media (min-width: 600px) and (max-width: 1023px) {
  @keyframes slidein1 {
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes slidein2 {
    from {
      transform: translateY(-25%);
    }

    to {
      transform: translateY(0%);
    }
  }
}
.active1 {
  background-color: #4a3aff !important;
  animation: slidein1 1s forwards !important;
}
.active {
  background-color: #4a3aff !important;
}
.show {
  display: block !important;
}
.active2 {
  background-color: #4a3aff !important;
  animation: slidein2 1s forwards !important;
  animation-delay: 1s;
}

.activeText {
  color: #ffffff !important;
}
</style>
