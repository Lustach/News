<template>
<div class="main">
    
    <div class="authorphoto">
        
        <v-img :src="Infof.authorphoto" alt="authorphoto"
        width="100%"
        height="100%"
        ></v-img>
        
    </div>
    <div class="name"><h4>{{Infof.author}}</h4></div>
    <div class="LookingPage ">
        <template>
  <v-card
    color="grey lighten-4"
    flat
    height="30%"
    :img="Infof.photo"
  >
  
    <v-toolbar dense
    >
      

        <h4 id="padInH4">{{Infof.header}}</h4>
        

      

      
    </v-toolbar>
  </v-card>
  <div>{{Infof.data}}</div>
  <div class="textField">{{Infof.content}}</div>
</template>
        
    </div>
</div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters(["Infof"]),
    }
}
</script>

<style  scoped>
    .name{
        position:absolute;
        margin-top:25%;
        margin-left:12%;
    }
    .LookingPage{
        border: 1px solid rgba(0, 0, 0, 0.267);
        height: 91%;
        width:40%;
        margin-left:30%;
        position:absolute;
        text-align: center;
    }
    .authorphoto{
        border: 1px solid black;
        /* background-color: black; */
        margin-left:4%;
        height:50%;
        width: 20%;
        position:absolute;
    }
    .textField{
        border:1px solid rgba(0, 0, 0, 0.267);
        padding:5% 5% 2% 5%;
    }
    #padInH4{
        padding:22%;
    }
</style>