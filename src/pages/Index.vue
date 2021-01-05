<template>
  <q-page class="container bg-grey-1">
    <div class="q-pa-sm row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-lg-3" v-for="(item, index) in dataMiniCard" :key="index">
        <mini-card
          :value="item.value"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
    <div class="row q-pa-sm q-col-gutter-md">
      <div class="col-xs-12 col-lg-8">
        <q-card class="fit">
          <apex-line />
        </q-card>
      </div>
      <div class="col-xs-12 col-lg-4">
        <q-card class="fit">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" icon="mail" />
            <q-tab name="alarms" label="Alarms" icon="alarm" />
            <q-tab name="movies" label="Movies" icon="tv" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              <apex-donut />
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              <apex-donut />
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              <apex-donut />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Index',
  components: {
    ApexDonut: () => import('components/ApexDonut'),
    ApexLine: () => import('components/ApexLine'),
    MiniCard: () => import('components/MiniCards')
  },
  data () {
    return {
      dataMiniCard: [
        { value: '2.000', description: 'Food', icon: 'fastfood' },
        { value: '1.500', description: 'Rent', icon: 'house' },
        { value: '20.000', description: 'Employees', icon: 'person' },
        { value: '900', description: 'Education', icon: 'book' }
      ],
      tab: 'mails'
    }
  }
}
</script>
