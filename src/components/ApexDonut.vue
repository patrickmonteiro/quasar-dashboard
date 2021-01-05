<template>
  <apexchart type="donut" height="200" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexDonut',
  data () {
    return {
      series: [44, 55, 41],
      chartOptions: {
        colors: ['#008FFB', '#00E396', '#FEB019'],
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
              height: 400
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['Apple', 'Mango', 'Orange'],
        legend: {
          height: 100,
          labels: {
            colors: '#000000'
          }
        }
      }
    }
  }
}
</script>
