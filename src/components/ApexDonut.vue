<template>
  <apexchart type="donut" height="250" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexDonut',
  data () {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        colors: ['#008FFB', '#00E396', '#FEB019'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        title: {
          text: 'Donut',
          align: 'left',
          style: {
            color: '#000000'
          }
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: '#000000'
          }
        }
      }
    }
  }
}
</script>
