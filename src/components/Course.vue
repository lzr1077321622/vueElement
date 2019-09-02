<template>
	<div>
		<Heade/>
	      <el-row style='margin-top:60px;min-height: 604px;'> 
			 	 <el-col :span="16" :push="4" class="ganhuo">
					<router-link :to="{path:''}"><h4>当前位置/</h4></router-link>
					<router-link :to="{path:'/'}"><h4>首页/</h4></router-link>
					<router-link :to="{path:'Course'}"><h4>课程</h4></router-link>
					 <el-row style="margin-top: 19px;">
						<el-col :span="8" v-for="item in datas" :key="item.id" style="padding: 19px 11px;width:25%">
							<el-card :body-style="{ padding: '0px' }">
							<img :src="item.cover" class="image">
							<div style="padding: 14px;" class="box">
								<span>{{item.title}}</span>
								
								<div class="bottom clearfix">
								<time class="time">{{dateFormat(item.startTime)}}～{{dateFormat(item.endTime)}}</time>
								<el-button type="text" class="button" @click="openCourse(item.id)">
									查看详情
								</el-button>
								</div>
							</div>
							</el-card>
						</el-col>
						</el-row>
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
				this.$axios.get(this.API.baseURL+"class?pageNo="+self.page+"&pageSize=16&sort=desc_startData",{
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
		//打开课程详情页
		openCourse(id){
			this.$router.push({  
				path: '/courseDetail',   
				name: 'courseDetail',  
				params: {   
					id: id,   
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
.el-col-8 {
    width: 33.33333%;
    padding: 19px 11px !important;
}
.image {
    width: 100%;
    display: block;
    height: 150px;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .page{
	  margin-bottom: 20px;
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
.box span{
	 width: 267px;
    height: 20px !important;
    overflow: hidden;
    display: block;
	font-size: 13px;
	color: #444;
}
.el-col-8{
   transition:0.5s ease-in-out;
}
.el-col-8:hover{
	box-shadow:  0px 0px 10px #ccc;
	cursor: pointer;
}
</style>
