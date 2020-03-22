<template>
  <apexchart ref="realtimeChart" type="line" height="300" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexLine',
  data () {
    return {
      series: [
        {
          name: 'Food',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 99]
        },
        {
          name: 'Rent',
          data: [30, 51, 75, 81, 99, 2, 39, 41, 29]
        }
      ],
      chartOptions: {
        colors: ['#ff355a', '#17ead9', '#f02fc2'],
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.8
          }
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        markers: {
          size: 4,
          colors: ['#d4d4d4'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        dataLabels: {
          enabled: false
        },
        title: {
          // text: `Visitors - ${this.dataProvider.counter}`,
          align: 'left',
          style: {
            color: '#000'
          }
        },
        xaxis: {
          categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'AGO', 'SET'],
          labels: {
            style: {
              colors: '#000'
            }
          }
        },
        yaxis: {
          labels: {
            show: false,
            style: {
              colors: '#000'
            }
          }
        }
      }
    }
  }
}
</script>
