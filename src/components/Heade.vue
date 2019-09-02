<template>
	<div>
	  <el-row  style='border-bottom: solid 1px #e6e6e6;background: #E4E7ED;'>
		 <el-col :span="4" :push="4">
			 <div  class="grid-content">
		        <p>
					<router-link :to="{path:'/'}">
					 <img src="../assets/img/logo.png" alt="">
					</router-link>
				</p>
		   </div>
		 </el-col>
       <el-col :span="10" :push="4">
			 <div class="el-menu-demo">
				<router-link :to="{path:'/'}">首页</router-link>
				<router-link :to="{path:'/course'}">课程</router-link>
				<router-link :to="{path:'/zhaomore'}">资讯</router-link>
				<router-link :to="{path:'/questionMore'}">问答</router-link>
				<router-link :to="{path:'/ziliao'}">下载</router-link>
				<router-link :to="{path:'/aboutme'}">Aboutme</router-link>
		 </div>
		 </el-col>
		  <el-col :span="4" :push="2" class="logo"> 
			  
			<!---弹出层--->
			 <div>
				 
				 <el-popover
					placement="bottom-end"
					width="400"
					v-if="visible"
					popper-class="dolog"
					trigger="click">
				   <el-row class="paddinp">
					    <el-row class="tel">
						<el-col :span="16">
							<el-input v-model="tel"  suffix-icon="el-icon-phone-outline" clearable placeholder="请输入手机号码" ></el-input>
							
						</el-col>
						<el-col :span="4" class="code">
							<el-button type='primary' style='margin: 13px 5px;'  @click="sendcode">发送验证码</el-button>
						</el-col>
						</el-row> 
					  <el-row>
						<el-col>
					    	<el-input v-model="codenum" suffix-icon="el-icon-odometer" placeholder="请输入验证码" clearable></el-input>
						</el-col>
					  </el-row>
						<el-button type='primary' style='margin: 10px 220px;'  @click="login">立即登录</el-button>
				   </el-row>
					<el-button id='a'   slot="reference" type='primary' style='margin: 10px 220px;'>登录</el-button>
		    	</el-popover>
			 </div>
			<span class="imgbox">
			<img :src="userimg" alt="" >
			</span>
			<p  class="spanbox" >{{userinfo}}</p>  
		  </el-col>
		 </el-row>

	</div>
</template>
<script>
import { Loading } from 'element-ui';
	export default {
		name: 'Heade',
		data() {
			return {
			  visible:true,
			  show:false,
			  userinfo:'',//用户名
			  userimg:"",//头像
			  tel:'',//电话
			  codenum:''//验证码
			}
		},
		methods:{
	//发送验证码
	 sendcode(){
		 if(this.tel==""){
              this.$notify({
					message: '手机号码不能为空',
					type: 'warning'
					});
		 }else{
			  alert('练手项目，地址暂时不对外开放；需要在此基础上开发联系QQ464857177');
			  return false;
			   this.$notify({
						title: '验证码已发送',
						message: '请注意查收，2分钟内有效',
						type: 'success'
						});
						var self = this;
						this.$axios.post(aaa,{
					})
						
					.then(function (response) {
					
					})
				.catch(function (error) {
				});
		 }
		
	},
	//登录		
		login(){
			alert('验证码接口被限制，需要完整登录请联系作者QQ464857177')
			let loadingInstance = Loading.service({
				text: '登录中',
				background:'rgba(0,0,0,0.1)'
			});
			var self = this;
				this.$axios.post(this.API.baseURL+'user/login/sms?phone='+self.tel+'&code='+ self.codenum,{
				})
				.then(function (response) {
					 loadingInstance.close();
					 window.location.reload(); 
				     console.log(response)
					self.show = false;
					localStorage.setItem("token", JSON.stringify(response.data.data));
				
				})
				.catch(function (error) {
					 loadingInstance.close();
					 self.$notify({
						title: '登录失败',
						message: '请检查手机号或者验证码是否正确',
						type: 'success'
						});
				});
			},
		
        },
		
		 created: function () {
			 let isLogin = window.localStorage.getItem('token');
			 let info = JSON.parse(isLogin)
			 if(info=='' || info==undefined || info=="undefined"){
				 this.show = false;
			 }else{
				   this.visible = false;
				   this.show = true;
				   this.userinfo= "登录账号  [   "+info.nickName+'   ]';
				  this.userimg=info.imageUrl
			 }

        },
	}
</script>
<style>
.el-menu--horizontal>.el-menu-item {
    height: 67px;
}
    .el-menu-demo a{
		text-decoration: none !important;
		height: 60px;
		color: #909399;
	    padding: 20px 20px;
		line-height: 60px;
	}
	.grid-content{
		height: 100%;
        position: relative;
	}
	.grid-content p a{
		text-align: center;
		margin-right: 20px;
		line-height: 60px;
		font-size: 30px;
		color: #1989fa;
		text-decoration: none;
		text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.25);
	}
	.grid-content p a img{
		width: 150px;
		height: 54px;
		position: absolute;
		top: 4px;

	}
	.router-link-exact-active{
		border-bottom: 2px solid #1989fa;
	}
	/*logo*/
	.logo{
		height: 60px;
		
	}
	.dolog{
		margin:  0 auto;
	}
	.paddinp input{
		    margin: 14px -0px;
	}
	
	.code button{
		margin: 0px 10px;
	}
	.imgbox{
		width: 25px;
		height: 25px;
		margin-top: 21px;
		display: block;
		border-radius: 100%;
	}
	.imgbox img{
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
	.spanbox{
		margin-top: -23px;margin-left: 41px;
		color: #1989fa;
		font-size: 14px;
	}
</style>
