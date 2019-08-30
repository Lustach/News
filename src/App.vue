<template>
  <v-app>
    <app-header></app-header>
    <router-view/><!-- тут отображаются все роутеры на которые я перехожу -->
  </v-app>
  

</template>

<script>
import AppMain from './components/Main';
import AppHeader from './components/Header'
export default {
  data: () => ({
    //
    bars: [

        // { class: '', dark: true },
        { class: 'primary', dark: true },

      ],
  }),
  name: 'App',
  components: {
    AppMain,AppHeader
  },
  
};
</script>
