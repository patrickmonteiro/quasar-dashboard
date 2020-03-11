<template>
  <q-card>
    <q-card-section>
      <div class="col-6">
        <div class="text-h4">
          $ {{ value }}
        </div>
        <div class="text-body1 q-pl-sm">
          {{ description }}
        </div>
      </div>
      <div class="col-6">
        <q-icon :name="icon" size="xl" class="absolute-bottom-right q-pb-sm q-pr-sm" color="blue-5" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'MiniCard',
  props: {
    value: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>
