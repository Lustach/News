<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="200%"
    >
      <div>
        <v-btn text class="buttonCenter">Добавить статью</v-btn>
      </div>
    </v-toolbar>
    <div class="AllArticles">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(page,index) in article" :key="index">
            <v-expansion-panel-header>{{page.header}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{page.content}}
              <!-- <div class="checkers"> -->
                  
              <input type="checkbox" id="scales" name="popular" checked="checked" @click="SetPopular(index)"/>
              <label for="scales" class="Popular" >Популярная</label>
              <v-btn text to='./AddandEdit'><i class="material-icons">create</i></v-btn>
              <v-btn text><i class="material-icons" @click="DeleteArticle(index)">clear</i></v-btn>
              <!-- </div> -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
    methods:{
        ...mapMutations(["delete","setpopular"]),
        DeleteArticle(index){
            this.$store.commit("delete", index);
        },
        SetPopular(index){
            this.$store.commit("setpopular",index)
        }
    },
  computed: {
    ...mapGetters(["article", "showpager","Infof"])
  }
};
</script>
<style scoped>
.buttonCenter {
  /* padding: 4% 40% 30% 45%; */
  margin-left: 450%;
  margin-top: 40%;
}
.checkers {
  position: absolute;
  background-color: blue;
  width: 100px;
  margin-left: 60%;
}
.AllArticles {
}
/* .Popular{
    font-family: Verdana, Arial, Helvetica, sans-serif; 
    font-size: 11pt; 
} */
</style>


