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
        title: {
          text: 'Donut',
          align: 'left',
          style: {
            color: '#000000'
          }
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        responsive: [{
          breakpoint: 300,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          height: 400,
          labels: {
            colors: '#000000'
          }
        }
      }
    }
  }
}
</script>
