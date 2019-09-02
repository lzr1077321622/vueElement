<template>
	<div>
	  <!--导航菜单-->
	     <Heade/>
		 <!---轮播图-->
		  <el-row>
			 <el-col :span='16' :push='4' style='margin-top: 15px;height:250px;' >
				 <el-carousel :interval="5000" arrow="always">
					<el-carousel-item v-for="item in arrList" :key="item.id">
					<img :src="item.showUrl" alt="" style='width:100%;height:100%'>
					</el-carousel-item>
				</el-carousel>
			 </el-col>
		  </el-row>
		  <!--干货考情-->
		  <el-row style='margin-top:60px'> 
			 	 <el-col :span="16" :push="4" class="ganhuo">
					 <p>干货考讯及时送达</p>
					 <p>LATEST INFORMATION & UNIQUE SKILLS</p>
				 </el-col>
		  </el-row>
		   <el-row style='margin-top:60px;height: 372px; overflow: hidden;'> 
			 	 <el-col :span="7" :push="4" class="ganhuo" style='background: #FFCCCC;'>
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<i class="el-icon-menu"></i>&nbsp;&nbsp;<span>招聘考情</span>
							<el-button style="float: right; padding: 3px 0" type="text">
								<el-tag><router-link :to="{path:'/zhaomore'}">更多</router-link></el-tag>
							</el-button>
						</div>
						<div v-for="item in article_list" :key="item.id" class="text item">
							 <router-link :to="{path:'/zhaopindetail', query:{id:item.id}}">
	                              {{item.title}}
							</router-link>
						
						</div>
						</el-card>
				 </el-col>
				 <el-col :span="8" :push="5" class="ganhuo" style='background: #cecece;'>
					<el-card class="box-card">
					<div slot="header" class="clearfix">
                        <i class="el-icon-download"></i>&nbsp;&nbsp;<span>资料下载</span>
						<el-button style="float: right; padding: 3px 0" type="text">
					    	<el-tag><router-link :to="{path:'/ziliao'}">更多</router-link></el-tag>
						</el-button>
					</div>
					<div v-for="item in download" :key="item.id" class="text item" @click="open(item.title,item.downloadUrl)">
						 <p>{{item.title}}</p>
					</div>
					</el-card>
				 </el-col>
		  </el-row>
		  <!--你问我答-->
		    <el-row style='background: rgba(248,252,255,1);margin-top:20px'> 
				 <el-col :span="16" :push="4" class="ganhuo">
					 <p>你问大家答</p>
					 <p>FREECOMMUNITY</p>
				 </el-col>
		  </el-row>
		   <el-row style='background: rgba(248,252,255,1)'> 
				 <el-col :span="16" :push="4" class="ordinary_list_box">
					<ul>
						
						<li  v-for="item in problems" :key="item.id"  @click="openquestion(item.id,item.content,item.questionTime,item.userImgUrl,item.userName,item.answerSum)" class="text item">
							<p>{{item.content}}</p>
							<div class="listbox">
								<p><img :src="item.userImgUrl" /></p>
								<p><i class="el-icon-date"></i>&nbsp;{{ dateFormat(item.questionTime)}}</p>
								<p><i class="el-icon-view"></i>&nbsp;{{item.answerSum}}</p>
							</div>
						</li>
						
					</ul>
				 </el-col>
		  </el-row>
		    <el-row class="goquestion">
				    <router-link :to="{path:'/questionMore'}">
				    	<el-button type="primary">去提问</el-button>
					</router-link>	
			</el-row>
		  <!--脚-->
         <Foot/>
		
	</div>
</template>

<script>
import Heade from './Heade'
import Foot from './Foot'
import { Loading } from 'element-ui';
	export default {
		components: { Heade,Foot },
		name: 'Index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				arrList:[],//轮播图
				article_list:[],//招聘考勤
				//资料下载
				download: [],
				problems:[]
			}
		},
		methods:{
			list:function(){
			
				var self = this;
				
				this.$axios.get(this.API.baseURL+'webBanner?position=1&size=5',{
				})
				.then(function (response) {
				
					self.arrList=response.data.data
				})
				.catch(function (error) {
					console.log(error);
				});
			},

		
		//招聘考勤
		zhaopinlist: function() {
		let loadingInstance = Loading.service({
					text: '加载中',
					background:'rgba(0,0,0,0.1)'
				});
	                var self = this;
					this.$axios.get( this.API.baseURL+'content?type=3&sort=desc_ctime&pageNo=1&pageSize=8',{
					})
					.then(function (response) {
						loadingInstance.close();
				    	self.article_list = response.data.data;
					})
					.catch(function (error) {
					
					});
				},
			//资料下载
			downloadpdf: function() {

					var self = this;
					this.$axios.get(this.API.baseURL+'material?pageNo=1&pageSize=8',{
					})
					.then(function (response) {
					    self.download = response.data.data;
					})
					.catch(function (error) {
					
					});
				},
            //你问我答
			problemlist: function() {
					var self = this;
					this.$axios.get(this.API.baseURL+'freeCommunity/question?pageNo=1&pageSize=4',{
				  })
					.then(function (response) {
					 self.problems = response.data.data;
			    	})
				.catch(function (error) {

				});
			},
			//日期函数
			dateFormat:function(time) {
					    var date=new Date(time);
					    var year=date.getFullYear();
					    var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
					    var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
					    var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
					    var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
					    var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
					    // 拼接
					    return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
					},
			//下载提示
			 open(title,URL) {
				this.$alert(URL, title, {
				confirmButtonText: '确定',
				callback: action => {
					this.$message({
					type: 'info',
					 message: "请在浏览器地址栏打开"+URL+"进行下载",
					});
				}
				});
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
			}		
        },
		created:function(){
			  this.list(); 
			  this.zhaopinlist();
			  this.downloadpdf();
			  this.problemlist();
		}
	}
</script>
<style scoped>
	.el-col {
		height: 60px;
		
	}
	
  .ganhuo p{
	text-align: center;
	line-height:30px;
	color: #909399;
  }
  .ganhuo p:nth-child(1){
	  font-size: 13px;
  }
  .ganhuo p:nth-child(2){
	  font-size:12px;
  }
  .text a{
    font-size: 13px;
    color: #666;
    margin-top:12px;
    display: block;
  
  }
  .text p{
	  text-align: left;
	  cursor: pointer;
  }
 .text a:hover{
  color: #409EFF;
 }
 
   .clearfix span{
    color: #409EFF;
    font-size: 14px;
    font-weight: bold;
	margin-top: -10px;
   }
	.el-button a{
	font-size: 13px;
	color: #666;
	text-decoration: navy;
	}
	.el-tag{
	background: #F2F6FC;
	}
	/*问答*/
    .ordinary_list_box{

		margin: 0 auto;
		height: 250px;
		overflow: hidden;
	}
	.ordinary_list_box ul li{
		width: 49%;
		display: inline-block;
		height: 100px;
		margin-left: 5px;
		margin-top: 2px;
		border: 1px solid #f3edf0;
		transition: 0.5 all;
		cursor: pointer;
	}
	.ordinary_list_box ul li:hover{
		border: 1px solid #f1e5eb;
	}
	.ordinary_list_box ul li p:nth-child(1){
		font-size: 14px;
		color: #999;
	    margin-top: 20px;
		margin-left: 5px;
	}
	.listbox{
		display: flex;
		
	}
	.listbox p{
		flex: 1;
	     line-height: 70px;
		 font-size: 12px;
		 color: #888;
	}
	.listbox p img{
		width: 20px;
		height: 20px;
		margin-top: 5px;
		display: block;
		margin-left: 10px;
	}
	.goquestion {
	
		width: 100px;
		height: 60px;
		margin: 0 auto;
	}
</style>
