<script setup lang="ts">
import { reactive } from "vue"
import VueApexCharts from "vue3-apexcharts"

let chartOptions = reactive({

  title: {
    text: 'Foydalanuvchilar , Mahsulotlar , Postlar soni',
    align: 'left'
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  grid: {
    borderColor: '#e7e7e7',

  },
  colors: ['#FF92AE', '#4C6FFF', '#FF9843'],
  xaxis: {
    categories: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {

    min: 100,
    max: 50000
  },
})

const series = reactive([
  {
    name: "Foydalanuvchilar",
    data: [2444, 2300, 26304, 18620, 33300, 40003, 34000]
  },
  {
    name: "Mahsulotlar",
    data: [180, 44444, 12300, 36304, 8620, 23300, 30003]
  },
  {
    name: "Postlar",
    data: [4480, 6333, 32300, 8304, 18620, 33300, 14203]
  }
])


</script>


<template>
  <div class="">
    <VueApexCharts type="line" height="350" ref="chart" :options="chartOptions" :series="series"></VueApexCharts>
  </div>
</template>