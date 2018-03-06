import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

import axios from 'axios';

export default new Vuex.Store({
	state:{},
	mutations:{},
	actions:{
		
		getClass(){
			return axios.get('http://localhost:3000/getclass')	
		},
		addClass(store,params){
			console.log(params)
			return axios.post('http://localhost:3000/addclass',{classify:params.classify})
		},
		delClass(store,params){
			return axios.get('http://localhost:3000/delclass?id=' + params._id)
		}
		
	},
	getters:{}
})


