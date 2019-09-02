<template>
	<el-row>
         <Heade></Heade>
		    <el-row type="flex" style="margin-top:60px;">
                 <el-col :span="16" :push="4" class="ganhuo">
					<router-link :to="{path:''}"><h4>当前位置/</h4></router-link>
					<router-link :to="{path:'/'}"><h4>首页/</h4></router-link>
					<router-link :to="{path:'/questionMore'}"><h4>问答列表/</h4></router-link>
					<router-link :to="{path:''}"><h4>问答详情</h4></router-link>
                     <!--数据展示-->
                        <el-row style="margin-top: 19px;" class="queslist">
                        <el-input style="width:300px;"
							placeholder="请输入内容"
							v-model="serch"
							clearable>
						</el-input>   
						<el-button  style="margin-left:10px" type="primary" @click="serchList()">搜索</el-button> 
                        </el-row>
				 </el-col>
                 
						 
            </el-row>
			 <!----->
			  <el-row type="flex" style="margin-top:60px;">
              <el-col :span="16" :push="4" class="quesbox">
                  <el-row class="item1">
					<el-row class="question_txt">
					<el-row class="question_txt_left">
						<el-row class="question_txt_left_count">
						<p>{{title}}</p>
						</el-row> 
						<el-row class="question_info">
						<span><img :src="img" /></span> 
						<span>{{name}}</span> 
						<span>{{dateFormat(time)}}</span>
						</el-row>
					</el-row> 
					<el-row class="question_txt_right">
						<el-popover
						placement="bottom"
						width="500"
						trigger="click">
						  <el-row class="textbpx">
							 <textarea  v-model="muquess" cols="30" rows="10"></textarea>
							 <el-button type="primary" @click="muques">回答</el-button>
						  </el-row>
						<el-button slot="reference">我要回答</el-button>
						</el-popover>
					</el-row>
					</el-row>
					<!--问答列表-->
				     <el-row style="margin-top:20px;">
						  <el-row class="question_box_list">
								<ul>
									<li  v-for="item in anwList" :key="item.id">
									<el-row class="question_box_list_img">
										<img :src="item.userImgUrl" />
									</el-row> 
									<el-row class="question_box_list_txt">
										<el-row class="question_box_list_name">
											<p>{{item.userName}}</p>
										</el-row> 
										<el-row class="question_box_list_count">
											<p>{{item.content}}</p>
										</el-row>
									</el-row> 
									<el-row class="question_box_list_time">
										<p>{{dateFormat(item.answerTime)}}</p>
									</el-row>
									</li>
								
								</ul>
							</el-row>
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
				  </el-row>
				   
				<el-row class="item2">
				     <h3>相关问题</h3>
						<p v-for="item in hotdata" :key="item.id"  @click="openques(item.id,item.content,item.questionTime,item.userImgUrl,item.userName,item.answerSum)">{{item.content}}</p>
				</el-row>
			 </el-col>		
			</el-row>    
          <Foot></Foot>
	</el-row>
</template>

<script>
var obj ={};
import Heade from './Heade'
import Foot from './Foot'
import { Loading } from 'element-ui';
	export default {
        name: 'Question',
        components: { Heade,Foot },
		data() {
			return {
				page:1,//默认请求第一页
				countPage:5,
			    serch:'',//搜索内容
			    id:obj.id || 1, //首页过来的id	
				title: obj.Atitle, //问答内容
				time:obj.Atime, //问答时间
				img: obj.Aimg, //头像
				name: obj.Aname,//名字
				num: obj.Anum,//数量

				anwList:[],//回答列表
				hotdata:[],//热门话题

				muquess:''//我要回答
			}
		},
		methods:{

			//搜索
			serchList(){
				  let loadingInstance = Loading.service({
						text: '加载中',
						background:'rgba(0,0,0,0.1)'
					});
					var self = this;
					this.$axios.get(this.API.baseURL+"freeCommunity/question?query="+self.serch,{
					})
					.then(function (response) {
					
						loadingInstance.close();
						if(response.data.data==[] ||response.data.data.length ==0){
                            self.$notify.error({
							title: '搜索结果',
							message: '暂无相关搜索'
							});
							self.hotdata=[];
						}else{
                        	self.hotdata =response.data.data;	
						}
					})
					.catch(function (error) {
						
					});
			},
			//回答列表
			anwlist:function(){
				  let loadingInstance = Loading.service({
						text: '加载中',
						background:'rgba(0,0,0,0.1)'
					});
					var self = this;
					this.$axios.get(this.API.baseURL+"freeCommunity/question/"+self.id + "/answer?pageNo=" +self.page+"&pageSize=4",{
					})
					.then(function (response) {
						loadingInstance.close();
					
						self.anwList =response.data.data;	
				    	self.countPage = response.data.page.countPage;
					
					})
					.catch(function (error) {
						loadingInstance.close();
						 if(this.$route.params.id == '' || this.$route.params.id == undefined){
							this.$router.push({  
								path: '/',   
								name: 'Index',  
							})  
						 }else{
                           console.log(response)
						 }	
					});
				},
				//热门话题
				hotlist(){					
					var self = this;
					this.$axios.get(self.API.baseURL+"freeCommunity/question/popular",{
					})
					.then(function (response) {
						self.hotdata =response.data.data;	
					})
					.catch(function (error) {
					
					});
				},
				//点击分页
				changePage:function(e){
					this.page= e;
					this.anwlist();
				},
				//问答          //标题  //时间        //头像     //名字   //w问答数量
			openques(id,content,questionTime,userImgUrl,userName,answerSum){
				this.id=id, 
				this.title= content, 
				this.time=questionTime, 
				this.img= userImgUrl, 
				this.name= userName,
				this.num=answerSum
				this.anwlist();	 
			},
			//我要回答
			muques(){
				alert('练手项目，暂时不开放')
				return false;
			    let isLogin = window.localStorage.getItem('token');
				let info = JSON.parse(isLogin)
				if(info=='' || info==undefined || info=="undefined"){
					alert('请登录')
				}else{
						var self = this;
						this.$axios.post(self.API.baseURL+ "freeCommunity/question/" + self.id + "/answer?content=" + self.muquess,{
						})
						.then(function (response) {
								
						})
						.catch(function (error) {
							
						});
				}

			},


		
			dateFormat:function(time) {
				var date=new Date(time);
				var year=date.getFullYear();
				var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
				var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
				var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
				
				// 拼接
				return year+"-"+month+"-"+day+" "+hours;
			},
           	},  
        
		mounted:function(){
		let isid = this.$route.params.id;
		 if(isid == '' || isid == undefined){
                this.$router.push({  
                    path: '/',   
                    name: 'Index',  
                })  
             }else{
			   obj =this.$route.params;
			   this.anwlist(); //回答列表
			   this.hotlist();//热门
             }
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
.queslist{
display: flex;
}
.quesbox{
display: flex;
margin-bottom: 20px;
}
.item1{
flex: 1;
margin-right: 10px;
}
.item2{
width: 200px;
min-height: 800px;
}
/**/
.question_txt {
width: 100%;
min-height: 150px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 40px rgba(136, 136, 136, 0.13);
opacity: 1;
border-radius: 10px;
display: flex;
}
.question_txt_left {
width: 645px;
}
.question_info {
width: 100%;
height: 50px;
margin-bottom: 10px;
display: flex;
}
.question_txt_left_count p {
color: #888;
font-size: 15px;
margin: 18px;
line-height: 25px;
font-weight: bold;
}
.question_info span:nth-child(1) {
width: 25px;
height: 25px;
margin-left: 20px;
display: inline-block;
}
.question_info span:nth-child(1) img {
width: 100%;
height: 100%;
}
.question_info span:nth-child(2) {
color: #333333;
display: block;
margin-left: 12px;
font-size: 13px;
}
.question_info span:nth-child(3) {
font-size: 12px;
color: #ccc;
margin-left: 10px;
margin-top: 2px;
}
.question_txt_right {
width: 200px;
position: relative;
}
.question_txt_right a:hover {
background: salmon;
}
.question_txt_right button {
width: 117px;
height: 35px;
text-align: center;
line-height: 13px;
background: #FDB1B1;
border-radius: 10px;
color: #fff;
font-size: 14px;
font-weight: bold;
position: absolute;
bottom: 23px;
left: 50px;
cursor: pointer;
}
.question_box_list {
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 40px rgba(136, 136, 136, 0.13);
opacity: 1;
border-radius: 20px;
}
.question_box_list ul li {
width: 95%;
border-bottom: 1px dashed #ccc;
margin: 0 auto;
display: flex;
}
.question_box_list ul li .question_box_list_img {
width: 40px;
height: 40px;
background: #fafafa;
border-radius: 20px;
overflow: hidden;
margin: 28px 2px;
}

.question_box_list ul li .question_box_list_txt {
flex: 1;
margin-left: 10px;
}
.question_box_list ul li .question_box_list_time {
width: 100px;
margin: 0 auto;
}
.question_box_list ul li .question_box_list_img img {
width: 100%;
height: 100%;
}
.question_box_list ul li .question_box_list_txt .question_box_list_name {
margin-top: 25px;
}
.question_box_list_count {
margin-top: 2px;
}
.question_box_list ul li .question_box_list_txt .question_box_list_name p {
color: #333333;
font-size: 14px;
font-weight: bold;
}
.question_box_list_count p {
color: #666;
font-size: 14px;
padding: 8px 0px;
}
.question_box_list ul li .question_box_list_time p {
text-align: center;
margin-top: 58px;
font-size: 13px;
color: #999999;
}
.item2 h3{
text-align: center;
line-height: 30px;
margin-top: 10px;
color: saddlebrown;
}
.item2 p{
font-size: 13px;
color: #909399;
padding: 10px 6px;
text-decoration: underline;
cursor: pointer;
}
.textbpx{
	height: 400px;
}
textarea{
	 width: 100%;
    height: 350px;
    border: 0;
}
.textbpx button{
	float: right;
}
</style>