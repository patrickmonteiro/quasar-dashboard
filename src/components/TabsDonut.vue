<template>
  <q-card class="fit">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="blue-5"
      indicator-color="blue-5"
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
</template>

<script>
export default {
  name: 'TabsDonut',
  components: {
    ApexDonut: () => import('components/ApexDonut')
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
