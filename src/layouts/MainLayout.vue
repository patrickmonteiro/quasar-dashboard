<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="ti-menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar Dashboard
        </q-toolbar-title>

        <q-btn
          color="blue-7"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="250"
    >
      <q-list
        class="text-grey-7"
      >
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      third: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'DASHBOARD',
          icon: 'ti-layout-grid2',
          route: '/'
        },
        {
          title: 'Github',
          icon: 'code',
          route: '/second'
        },
        {
          title: 'Discord Chat Channel',
          icon: 'chat',
          route: '/other'
        }
      ]
    }
  }
}
</script>
