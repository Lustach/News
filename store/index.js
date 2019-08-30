import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import sidemenu from './modules/sidemenu'
export const store = new Vuex.Store({
    modules: {
        sidemenu,
    },
    state: {
        article: [{
                header: 'Сибирь горит, но нам не выгодно',
                data: '13.08.2019',
                author: 'Archer',
                photo: './images/BeOrNot.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dignissim convallis aenean et tortor. Elementum tempus egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis convallis tellus id. Purus sit amet luctus venenatis lectus magna fringilla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus turpis in eu mi bibendum neque. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing at in tellus. Eu augue ut lectus arcu bibendum. Tincidunt id aliquet risus feugiat in ante metus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
                authorphoto: './authorPhotos/Artur.jpg',
                popular: true,
            },
            {
                header: 'Сибирь горит, но нам не выгодно 2 ',
                data: '13.08.2019 2',
                author: 'kurkurin',
                photo: './images/Forest.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dignissim convallis aenean et tortor. Elementum tempus egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis convallis tellus id. Purus sit amet luctus venenatis lectus magna fringilla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus turpis in eu mi bibendum neque. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing at in tellus. Eu augue ut lectus arcu bibendum. Tincidunt id aliquet risus feugiat in ante metus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
                authorphoto: './authorPhotos/Curcur.jpg',
                popular: true,
            },
            {
                header: 'Lorem ipsum dolor sit amet 3 ',
                data: '13.08.2019 3',
                author: 'kurkurin',
                photo: './images/Forest.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dignissim convallis aenean et tortor. Elementum tempus egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis convallis tellus id. Purus sit amet luctus venenatis lectus magna fringilla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus turpis in eu mi bibendum neque. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing at in tellus. Eu augue ut lectus arcu bibendum. Tincidunt id aliquet risus feugiat in ante metus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
                authorphoto: './authorPhotos/Curcur.jpg',
                popular: true,
            },
            {
                header: 'Lorem ipsum dolor sit amet 4 ',
                data: '13.08.2019 4',
                author: 'kurkurin',
                photo: './images/Forest.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dignissim convallis aenean et tortor. Elementum tempus egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis convallis tellus id. Purus sit amet luctus venenatis lectus magna fringilla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus turpis in eu mi bibendum neque. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing at in tellus. Eu augue ut lectus arcu bibendum. Tincidunt id aliquet risus feugiat in ante metus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
                authorphoto: './authorPhotos/Curcur.jpg',
                popular: null,
            },
            {
                header: 'Lorem ipsum dolor sit amet 5 ',
                data: '13.08.2019 5',
                author: 'kurkurin',
                photo: './images/Forest.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Dignissim convallis aenean et tortor. Elementum tempus egestas sed sed risus pretium. Pretium nibh ipsum consequat nisl. Erat nam at lectus urna duis convallis convallis tellus id. Purus sit amet luctus venenatis lectus magna fringilla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus turpis in eu mi bibendum neque. Sagittis vitae et leo duis ut diam quam nulla porttitor. Morbi tincidunt ornare massa eget egestas. Vestibulum lorem sed risus ultricies. Aenean et tortor at risus viverra adipiscing at in tellus. Eu augue ut lectus arcu bibendum. Tincidunt id aliquet risus feugiat in ante metus. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.',
                authorphoto: './authorPhotos/Curcur.jpg',
                popular: null,
            }
        ],
        globalindex: ''
    },
    mutations: {
        Info(state, payload) {
            // console.log(state.article[payload])
            state.globalindex = payload;
            // console.log(state.globalindex);
        },
        delete(state,payload){
            state.article.splice(payload,1)
        },
        setpopular(state,payload){
            console.log(state.article.popular[payload])
            state.article.popular[payload]=!state.article.popular[payload]
            console.log(state.article.popular[payload])
        }
    },
    getters: {
        article(state) {
            return state.article
        },
        Infof(state) {
            // console.log(state.popular)
            return state.article[state.globalindex]
        },
        GetPopular(state){
            return state.article.popular[state.globalindex]
        }
    }
})
// state:{
//     count:0,
//     info:{
//     },
//     person:[
//         {
//             photo:'',
//             FIO:'Луста Владислав Михайлович',
//             phone:['+380990910260',],
//             email:['lusta.vlad2001@gmail.com',],
//             birthday:'04.01.2001',
//             company:'Bilibamba',
//             site:'vk.com',
//             group:'Друзья'
//         },

//     ],
//     globalindex:0
// },