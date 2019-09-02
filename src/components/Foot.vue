<template>
	<div>
		  <el-row class="foot"> 
			 	 <el-col :span="16" :push="4"  class="foo_main">
				      <img src="../assets/img/footimg.png" alt="">
                     <div class="namne">
                         <p>40xx-9xx6-2xx6</p>
                         <p>xx海淀区丰慧中路x号新材料创业大厦x层817-022室</p>
                         <p>xxxxxxxxxxxxxxxxxxxxx1-203</p>
                         <p>xxxxxxxxxxxxxxxxxxxxxD座2414室</p>
                     </div>
                     <div class="code">
                         <img src="../assets/img/cc4.png" alt="">
                     </div>
                     <div class="code1">
                         <img src="../assets/img/cc3.png" alt=""> 
                     </div>
				 </el-col>
		  </el-row>
	</div>
</template>

<script>
	export default {
		name: 'Foot',
		data() {
			return {
			  
			}
		},
		methods:{
		

        },
		created:function(){
			
			
		}
	}
</script>
<style scoped>
	.foot{
        background: #171515;
        height: 150px;
    }
    .foo_main{
         position: relative;
         height: 150px;
    }
    .foo_main img{
        position: absolute;
        top: 35px;
        left: 5px;
    }
    .namne{
        width: 500px;
        height: 100px;
        position: absolute;
        top: 37px;
        left: 320px;
        line-height: 25px;
        font-size: 13px;
        color: white;
    }
    .code{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 12px;
        right: 320px;
    }
     .code1{
        width: 80px;
        height: 80px;
        position: absolute;
        top: 12px;
        right: 210px;
    }
    .code img{
        width: 100%;
        height: 100%;
    }
    .code1 img{
        width: 100%;
        height: 100%;
    }
</style>