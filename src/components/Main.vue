<!--<template>
  <div>
    <div class="slider">
      <div>
        <img src="../../images/BeOrNot.jpg" alt="Картинка" class="photo"/>
        <div>
          <h4></h4>
        </div>
      </div>
      <h1></h1>
    </div>
    <div class="right">
      <i class="material-icons">
        <button class="btn btn-primary">keyboard_arrow_right</button>
      </i>
    </div>
    <div class="left">
      <i class="material-icons">
        <button class="btn btn-primary">keyboard_arrow_left</button>
      </i>
    </div>
    <div class="side-menu">
        <h3>Все новости</h3>
        <ul v-for="(item,index) in article" :key="index">
            <li @click="showPage()">{{item.header}}</li>
        </ul>
    </div>

      
  </div>
</template> 
-->

<template >
<div >
<div class="slider">
  <v-carousel
  >
    <v-carousel-item
      v-for="(topic,i) in article"
      :key="i"
      
      :src="topic.photo"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row
          align="center"
          justify="center"
      ><div class="colorInData">{{topic.data}}</div></v-row>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <router-link to="/LookingPage"><div class="display-1">{{topic.header}}</div></router-link >
        </v-row>
    </v-carousel-item>
  </v-carousel>
  </div>
  <v-btn text color="pink">
  </v-btn>
    <!-- <v-card height="350px">
      <v-navigation-drawer
        absolute
        permanent
        left
      >
      </v-navigation-drawer>
    </v-card> -->
    
    <div >
      
        <v-navigation-drawer
          
              app
              class="blue darken-2 side-menu"
              width="20%"
              height="80%"
            >
            <h2 class="display-1 white--text " ><div id="padInSideBarHeader">Все новости</div></h2>
            <hr>
             <router-link to="/LookingPage" ><div class="padInSideBar"><p v-for="(page,index) in article" :key="index" class=" white--text" @click="infor(index)">{{page.header}}</p></div></router-link>
            </v-navigation-drawer>
      
            </div>
            
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data () {
      return {
        
        height:"100",
        drawer: null,
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        
      }
    },
  methods:{
    ...mapMutations(["ShowPage"]),
    showPage(arg){
      this.$store.commit("ShowPage",arg)
    },
      infor(or) {
        this.$store.commit("Info", or);
    }
  },
  computed: {
    ...mapGetters(["article","showpager"]),
    
  }
}
</script>
<style scoped>
.slider {
  border: solid rgb(4, 112, 253) 5px;
  width: 40%;
  height: 800px;
  background-color: rgb(222, 228, 231);
  margin: 5% 30% 0%;
}

.right {
  margin-left: 70%;
  margin-top: -25%;
}
.left{
    margin-left:27.8%;
    margin-top:-1.9%;
}
.side-menu{
  margin-top:8%;
  ;
}
.slider{
  width:40%;
  height:auto;
  border:none;
}
.photo{
  width:25%;
  height:25%;
  padding:1%;
}

.slider{
  position: absolute;
  z-index:1;
}
.padInSideBar{
  margin-left:3%;
}

 #padInSideBarHeader{
   text-align:center;
   margin-top:3%;
}
.colorInData{
  color:rgb(4, 112, 253);
}
</style>