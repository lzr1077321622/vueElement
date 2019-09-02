<template>
	<div>
         <Heade></Heade>
		    <el-row type="flex" style="margin-top:60px;">
                 <el-col :span="16" :push="4" class="ganhuo">
					<router-link :to="{path:''}"><h4>当前位置/</h4></router-link>
					<router-link :to="{path:'/'}"><h4>首页/</h4></router-link>
					<router-link :to="{path:'Course'}"><h4>课程列表/</h4></router-link>
                    <router-link :to="{path:''}"><h4>课程详情页</h4></router-link>
                     <!--数据展示-->
                        <el-row style="margin-top: 19px;">
                                  <el-row class="coursebox">
                                      <el-col :span="24" class="disbox">
                                            <el-row class="item1">
                                              <img :src="msgdata.cover" alt="">
                                            </el-row>
                                              <el-row  class="item2">
                                                  <el-row class="item2_box1">
                                                     <p>{{msgdata.title}}</p>
                                                     <p>{{dateFormat(msgdata.startTime)}}~{{dateFormat(msgdata.endTime)}}</p>
                                                    	<p>已有<span style='color:red'>{{msgdata.buyerNum}}</span>人购买，剩余<span>{{msgdata.totalNum-msgdata.buyerNum}}</span>个名额</p>
                                                  </el-row>
                                                   <el-row class="item2_box2">
                                                         <el-row v-if="msgdata.price==0 && msgdata.bought==false">
                                                              <span>免费</span>
                                                         </el-row>
                                                         <el-row v-if="msgdata.price!=0 && msgdata.bought==false">
                                                              <span>原价{{msgdata.price}}</span>
                                                         </el-row>
                                                         <el-tooltip content="请前往APP购买" placement="top">
                                                              <el-button type="primary" size='small' >立即购买</el-button>
                                                        </el-tooltip>
                                                    
                                                  </el-row>
                                                
                                            </el-row>
                                            
                                      </el-col>
                                  </el-row>
                        </el-row>
				 </el-col>
                  
            </el-row>
             <el-row  style="min-height:500px;margin-top:60px;">
                  <el-col :span="16" :push="4" class="">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="课程简介" name="first">
                            <p v-html="desc1"></p>
                        </el-tab-pane>
                        <el-tab-pane label="老师介绍" name="second">
                           <ul>
                               <li v-for="item in teacherlist " :key="item.id">
                                         <p><img :src="item.imageUrl" class="imgs"></p>
                                         <p>{{item.name}}</p>
                                        <el-rate v-model="item.teachingAge" :disabled=true></el-rate>
                               </li>
                           </ul>
                        </el-tab-pane>
                        <el-tab-pane label="课程表" name="third">
                            <el-row style="height: 300px;">
                                  <el-col v-for="(item) in courselist " :key="item.id"  class="colname">
                                         <p> {{item.title}}</p>
                                         <p  style="margin-top: 10px;">{{dateFormat(msgdata.startTime)}}~{{dateFormat(msgdata.endTime)}}</p>
                                      </el-col >   
                                 
                             </el-row>                                    
                        </el-tab-pane>
                        <el-tab-pane label="报名须知" name="fourth">
                                <p v-html="notes1"></p>
                        </el-tab-pane>
                    </el-tabs>
                 </el-col>    
             </el-row>
          <Foot></Foot>
	</div>
</template>

<script>
import Heade from './Heade'
import Foot from './Foot'
import { Loading } from 'element-ui';
	export default {
        name: 'courseDetail',
        components: { Heade,Foot },
		data() {
			return {
              activeName: 'first',//默认选中菜单
              msgdata:[],
              desc1:'',//课程简介
              courselist:[],//课程列表
              notes1:'',//报名须知
              teacherlist:[],//老师列表
               value5: 3.7
			}
		},
		methods:{
		 courseraInfo(){
             	let loadingInstance = Loading.service({
				text: '加载中',
				background:'rgba(0,0,0,0.1)'
				});
	            var self = this;
				this.$axios.get(this.API.baseURL+"class/" + this.$route.params.id,{
				})
				.then(function (response) {
					loadingInstance.close();
                     self.msgdata = response.data.data;
                     self.desc1 = decodeURIComponent(response.data.data.detail);//课程简介
                     self.notes1 = decodeURIComponent(response.data.data.notes);
				})
			.catch(function (error) {

			});
         },
        //课程表
        booklist(){
            var self = this;
            this.$axios.get(this.API.baseURL+"class/" +  this.$route.params.id + "/course",{
            })
            .then(function (response) {
                self.courselist = response.data.data;
            })
            .catch(function (error) {

            });
        },
        //老师
        teacher(){
            var self = this;
            this.$axios.get(this.API.baseURL+"class/" +  this.$route.params.id + "/teacher",{
            })
            .then(function (response) {
            
                self.teacherlist = response.data.data;
            })
            .catch(function (error) {

            });
        },
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
            //ID不存在自动跳转到课程页面
		     if(this.$route.params.id == undefined){
                this.$router.push({  
                    path: '/Course',   
                    name: 'Course',  
                })  
             }else{
              this.courseraInfo();
              this.booklist();
              this.teacher();
             }
           
        },
        
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
    .coursebox{
        border-radius: 4px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
        height: 150px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .disbox{
        display: flex;
    }
    .item1{
        width: 250px;
        height: 150px;
        padding: 5px 5px;
    }
    .item1 img{
        border-radius: 5px;
        width: 98%;
        height: 98%;
    }
    .item2{
        flex: 1;
        margin-left: 20px;
       
        margin-right: 10px;
        flex-direction: row-reverse;
    }
   .item2_box1{
       height: 110px;
      border-bottom: 1px solid #cccccc4f;
   }
  .item2_box2{
       height: 30px;
      }
  .item2_box1 p{
      color: #c8c8c8;
      line-height: 36px;
  }
  .item2_box2 span{
      color: #7bc7ff;
      line-height: 40px;
  }
  .item2_box2 button{
      float:right;
      margin-top: -35px;
  }
  .colname{
      padding:  10px 0px;
      font-size: 14px;
      color: orange;
  }
  .imgs{ 
    width: 50px;
    height: 50px;
    border-radius: 26px;
}
</style>