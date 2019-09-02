<template>
	<div>
	    <Header/>
		  <el-row style='margin-top:60px'> 
			 	 <el-col :span="16" :push="4" class="ganhuo">
					<router-link :to="{path:''}"><h4>当前位置/</h4></router-link>
					<router-link :to="{path:'/'}"><h4>首页/</h4></router-link>
					<router-link :to="{path:'/zhaomore'}"><h4>招聘考勤/</h4></router-link>
					<router-link :to="{path:''}"><h4>招聘考勤详情</h4></router-link>
					<h3 style="margin-top:20px">{{title}}</h3>
					<p v-html='content'>
					</p>
				 </el-col>
		  </el-row>
		  <Foot/>
	</div>
</template>

<script>
import Header from './Heade'
import Foot from './Foot'
import { Loading } from 'element-ui';
	export default {
		components: { Header,Foot },
		name: 'ZhaoPin',
		data() {
			return {
			    title:'',
                content:'',
				article_list:[]//招聘考勤
			}
		},
		methods:{
			list:function(){
				  let loadingInstance = Loading.service({
						text: '加载中',
						background:'rgba(0,0,0,0.1)'
					});
					var self = this;
					this.$axios.get(this.API.baseURL+'content/'+this.$route.query.id,{
					})
					.then(function (response) {
					    loadingInstance.close();
						self.title =response.data.data.title;	
						self.content = decodeURIComponent(response.data.data.content)
					})
					.catch(function (error) {
						console.log(error);
					});
				},

        },
		created:function(){
			
			    this.list(); 
		
			
		}
	}
</script>
<style scoped>
	.ganhuo{
		font-size: PingFang SC;
	}
	.ganhuo h3{
		text-align: center;
	}
	.ganhuo p{
		font-size: PingFang SC;
		font-size:13px;
		line-height: 35px;
	}
	.ganhuo a{
	display: inline-block;
	text-decoration: none !important;
	font-size: 13px;
	color: #1989fa;
	}
	.router-link-exact-active{
		border-bottom: none;
	}
</style>