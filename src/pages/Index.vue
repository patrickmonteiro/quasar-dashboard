<template>
  <q-page class="container bg-grey-1">
    <div class="q-pa-sm row q-col-gutter-md">
      <div class="col-3" v-for="item in 4" :key="item">
        <q-card>
          <q-card-section>
            <div class="col-6">
              <div class="text-h4">
                15.000
              </div>
              <div class="text-body1 q-pl-sm">
                teste
              </div>
            </div>
            <div class="col-6">
              <q-icon name="calendar_today" size="xl" class="absolute-bottom-right q-pb-sm q-pr-sm" color="grey-7" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-pa-sm">
      <div class="col-8">
        <apexchart ref="realtimeChart" type="line" height="400" :options="chartOptions" :series="series" />
      </div>
      <div class="col-4">
          <q-card class="fit">
            <q-card-section>
              <apex-donut />
            </q-card-section>
          </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexDonut from 'components/ApexDonut'
export default {
  name: 'ApexLine',
  components: {
    ApexDonut
  },
  data () {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 99]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        chart: {
          height: 350,
          type: 'line'
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
          text: 'Line',
          align: 'left',
          style: {
            color: '#000000'
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            style: {
              colors: '#000000'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              color: '#000000'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.setDataLineChart()
  },
  methods: {
    getRandomArbitrary (min, max) {
      return Math.floor(Math.random() * 99)
    },
    setDataLineChart () {
      setInterval(() => {
        this.series[0].data.splice(0, 1)
        this.series[0].data.push(this.getRandomArbitrary(0, 99))
        this.updateSeriesLine()
      }, 3000)
    },
    updateSeriesLine () {
      this.$refs.realtimeChart.updateSeries([{
        data: this.series[0].data
      }], false, true)
    }
  }
}
</script>
