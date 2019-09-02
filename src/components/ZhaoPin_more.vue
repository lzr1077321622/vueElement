<template>
	<div>
		<Heade/>
	      <el-row style='margin-top:60px;min-height: 604px;'>
			   <el-col :span="16" :push="4" class="ganhuo">
					<router-link :to="{path:''}"><h4>当前位置/</h4></router-link>
					<router-link :to="{path:'/'}"><h4>首页/</h4></router-link>
					<router-link :to="{path:''}"><h4>{{name}}</h4></router-link>
				 </el-col>	
				<el-col :span="16" :push="4" class="zlist"> 
					<ul>
						 
					   <li  v-for="item in datas" :key="item.id">
				
						<div class="item1"><img :src="item.cover" /></div>
							<router-link class="item2" :to="{path:'/zhaopindetail', query:{id:item.id}}">
							<div ><p>{{item.title}}</p></div>
							</router-link>
						<div class="item3">
							<p>{{dateFormat(item.contentTime)}}</p>
							<img src="../assets/img/hong.png" alt="">
						</div>
						  
					   </li>
					</ul>
			   </el-col>				  
		  </el-row>
		
		<el-row>
		<el-col :span="4" :push="14" class="page">
		<el-pagination
			background
			@current-change="changePage"
			layout="prev, pager, next"
			:page-count="countPage"
			
			>
			</el-pagination>
		</el-col>
		</el-row>
		<Foot/>
		
	</div>
</template>
<script>
import Heade from './Heade'
import Foot from './Foot'
import { Loading } from 'element-ui';
	export default {
		name:'Course',
		components: { Heade,Foot },
		data() {
			return {
			 name:"招聘考勤",
			 countPage:5,
			 page:1,
			 datas:[]
			}
		},
		methods:{
		//课程列表
		courselist: function() {
			this.list();
		},
		
        list:function(page){
				let loadingInstance = Loading.service({
					text: '加载中',
					background:'rgba(0,0,0,0.1)'
				});
				var self = this;
					this.$axios.get(this.API.baseURL+'content?type=3&sort=desc_ctime&pageNo='+self.page+'&pageSize=12',{
				})
				.then(function (response) {
			      loadingInstance.close();
					self.datas = response.data.data;
					self.countPage = response.data.page.countPage;
				})
			.catch(function (error) {
			});
		},
		//点击分页
		changePage:function(e){
			 this.page= e;
			 this.list();
		},
		//日期函数
			dateFormat:function(time) {
					    var date=new Date(time);
					    var year=date.getFullYear();
					    var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
					    var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
					    var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
					    // 拼接
					    return year+"-"+month+"-"+day;
					},       
        },
		created:function(){
		 this.courselist();
		
		}
	}
</script>
<style scoped>
.ganhuo a{
	display: inline-block;
	text-decoration: none !important;
	font-size: 13px;
	color: #1989fa;
}
.router-link-exact-active{
	border-bottom: none;
}
.page{
	margin: 20px;
}
.zlist ul li{
	list-style: none;
	width: 100%;
	height: 120px;
	background: #FAFAFA;
	margin-top: 20px;
	border-radius: 20px;
	cursor: pointer;
	display: flex;
	transition: 0.5 all;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.zlist ul li:hover{
	background: #f3f3f3;
}
.item1{
	width: 200px;
}
.item1 img{
	width: 100%;
	height: 100px;
	margin: 10px 10px;
	border-radius: 20px;
}
.item2{
	flex: 1;
	border-right: 1px solid #f1f1f1;
	margin-left: 20px;
	color: #666;
}
.item2 p{
	font-size: 15px;
	line-height: 120px;
}
.item3{
	width: 300px;
	position: relative;
}
.item3 img{
	width: 30px;
	height: 30px;
	display: block;
	position: absolute;
	top: 45px;
	left: 150px;
	transition: 0.8s ease-out;
}
.item3 p{
line-height: 120px;
margin-left: 10px;
font-size: 12px;
}
.zlist ul li:hover  img{
	left: 160px;
}
</style>
