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
						
						<li  v-for="item in problems" :key="item.id"  @click="openquestion(item.id,item.content,item.questionTime,item.userImgUrl,item.userName,item.answerSum)" class="text item">
							<p class="names">{{item.content}}</p>
							<div class="listbox">
								<p><img :src="item.userImgUrl" /></p>
								<p><i class="el-icon-date"></i>&nbsp;{{ dateFormat(item.questionTime)}}</p>
								<p><i class="el-icon-view"></i>&nbsp;{{item.answerSum}}</p>
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
			 name:"问题列表",
			 countPage:5,
			 page:1,
			 problems:[]
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
					this.$axios.get(this.API.baseURL+'freeCommunity/question?pageNo='+self.page+'&pageSize=4',{
				})
				.then(function (response) {
			        loadingInstance.close();
				     self.problems = response.data.data;
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
		//问答          //标题  //时间        //头像     //名字   //w问答数量
		openquestion(id,content,questionTime,userImgUrl,userName,answerSum){

			this.$router.push({  
				path: '/Question',   
				name: 'Question',  
				params: {   
					id: id, 
					Atitle: content, 
					Atime:questionTime, 
					Aimg: userImgUrl, 
					Aname: userName,
					Anum: answerSum
				}  
			
			})  
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
.zlist {
	margin-top: 20px;
}
.zlist ul li{
	width: 100%;
	border-bottom: 1px dashed #5b53d25e;
	margin-top: 10px;
	cursor: pointer;
}
.listbox{
	display: flex;
}

.listbox p:nth-child(1){
	margin-top: 5px;
	width: 100px;
	height: 100px;
}
.names{
	font-size: 13px;
}
.listbox p:nth-child(1) img{
	width: 100%;
	height: 100%;
}
.listbox p:nth-child(2){
	line-height: 100px;
	flex: 1;
	text-align: center;
} 
.listbox p:nth-child(3){
	width: 50px;
	line-height: 100px;
} 
</style>
