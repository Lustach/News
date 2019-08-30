<template>
  <div>
  <v-row>
    <v-col
      v-for="(bar, i) in bars"
      :key="i"
      cols="12"
      sm="12"
      md="6"

    >
      <v-card color="grey lighten-4" >
        <v-toolbar :color="bar.class" :dark="bar.dark" width="202.4%">
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <!-- <v-btn text @click="drawer=!drawer">Все новости</v-btn> -->
          <v-toolbar-title> <v-btn text to="./Main" >Главная</v-btn></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text to="./Adminka">
              Админка
            </v-btn>

            <v-btn text to="./AddandEdit"><i class="material-icons">create</i></v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data (){
    return{
      bars: [

        // { class: '', dark: true },
        { class: 'primary', dark: true },

      ],
    }
  },
  props: {},
  methods: {
    ...mapGetters(["info"])
  }
};
</script>

<style >
.header {
    background-color: rgb(4, 112, 253);
  font-style: inherit;
  height: 60px;
  position:fixed;
  
}
.aher {
  color: whitesmoke;
}
.fora {
  width: 150px;
}
.hr {
  margin: 0; /* Обнуляем значение отступов */
  padding: 4px;
}
.hrli {
  display: inline;
}
.icona {
  font-size: 50px;
}
.fortable {
  width: 90%;
  margin-left: 5%;
  margin-top: 1%;
}
.search{
    margin-left:10%;
    margin-top:5%;
    width:40%;
    height:5%;
}

</style>