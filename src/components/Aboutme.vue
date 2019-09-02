	<template>
	
        <div>
         <Heade/>
		 
			 	 <div class="about_ys">
                    <div class="about_ys_tit">
                        <p>关于Vue</p>
                        <p>ABOUT YUNSHI</p>
                    </div>
                    <div class="about_box">
                        <div class="about_box_left">
                            <img src="../assets/img/homes.png" />
                        </div>
                        <div class="about_box_right">
                            <div class="about_box_right_p">
                                <p>北京Vue教育科技有限公司（简称Vue）是一家互联网教育科技公司，专业提供互联网教育服务。公司旗下的Vue教育平台是一个专注于教师服务的一站式平台，平台集合了教师考前培训、教师就业安置、教师岗前培训以及名师培养打造等一站式服务，致力于为教育行业输送优秀人才。Vue认为，科技研发和教学研发是公司的核心竞争力，并已逐步建立起专业的IT技术团队和教学研发团队。Vue努力为参培学员提供更高质量的教研成果、知识体系，同时为学员配合定制千人千面的个性化学习方案，从而使学员可以在短时间内提升学习效率，同时大幅度降低学习成本。</p>
                            </div>
                            <div class="rig_line"></div>
                        </div>
                        <div class="yssm">
                            <p>Vue使命</p>
                            <p>YUNSHI MISSION</p>
                            <p>教育报国，以优质人才回馈社会</p>
                        </div>
                        <div class="yssm1">
                            <p>Vue愿景</p>
                            <p>YUNSHI VISION</p>
                            <p>成为专为教师服务的一流互联网教育科技公司</p>
                        </div>
                    </div>
                </div>

		<!--价值-->
		<div class="ys_val">
			<div class="ys_val_title">
				<p>Vue的价值观</p>
				<p>YUNSHI VALUSE</p>
			</div>
			<div class="ys_val_list">
				<ul>
					<li>
						<div class="ys_val_list_imgbox">
							<img src="../assets/img/a1.png" />
						</div>
						<p>客户、员工及一切合作伙伴共享未来</p>
					</li>
					<li>
						<div class="ys_val_list_imgbox">
							<img src="../assets/img/a2.png" />
						</div>
						<p>最好的服务就是把专业的知识教授给用户</p>
					</li>
					<li>
						<div class="ys_val_list_imgbox">
						<img src="../assets/img/a3.png" />
						</div>
						<p>协作、进取、担当是公司用人的重要标准</p>
					</li>
				</ul>
				<div class="val_line"></div>
			</div>
		</div>
		<!--trem-->
		<div class="trem">
			<div class="ys_val_title">
				<p>管理团队介绍</p>
				<p>MANAGEMENT TEAM INTRODUCTION</p>
			</div>
			<div class="trem_list">
				<ul>
					<li>
						<div class="trem_list_box">
							<div class="trem_list_img">
								<img src="../assets/img/a4.png" />
							</div>
						</div>
						<h2>张三</h2>
						<p class="p1">YUKAIYI</p>
						<p class="p2">市场及渠道副总裁</p>
						<span>
							毕业于xxxx管理大学，拥有12年教育行业经验及10年教育管理经验。曾担任北大xx鸟线下运营负责人，08年于山东组建团队启动新校区。后担任xx教育全国运营中心负责人，在15年-17年间，极大程度地开拓了xx教育的规模，做到全国23个省份167家地市加盟校。拥有着极为丰富的线下运营经验。
						</span>
					</li>
					<li>
						<div class="trem_list_box">
							<div class="trem_list_img">
							<img src="../assets/img/a5.png" />
							</div>
						</div>
						<h2>李四</h2>
						<p class="p1">LIUBAOXI</p>
						<p class="p2">&nbsp;技术副总裁(CTO)</p>
						<span>
							本科学历，从事互联网研发12年，具备6年互联网系统架构经验，某在线教育平台技术课程高级讲师。曾任某消费分期金融公司CTO，并带领50人的互联网技术团队，取得了丰硕的技术成果，拥有丰富的产品、技术研发及线上运营经验。
						</span>
					</li>
					<li>
						<div class="trem_list_box">
							<div class="trem_list_img">
								<img src="../assets/img/a4.png" />
							</div>
						</div>
						<h2>&nbsp;孟&nbsp;&nbsp;拉</h2>
						<p class="p1">ZHANGPING</p>
						<p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教研副总裁</p>
						<span>
							北京大学研究生学历，从事培训行业10余年，曾长期在某上市培训机构担任教研教学负责人，具备较为扎实的专业知识功底，以及较为丰富的行业经验。
						</span>
					</li>
				</ul>
			</div>
		</div>
	
     <Foot/>	  
	</div>
  
</template>

<script>
import Heade from './Heade'
import Foot from './Foot'
	export default {
        name: 'aboutme',
        components: { Heade,Foot },
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
		.addres .box {
				width: 1160px;
				margin: 92px auto;
				position: relative;
			}
			
			.about_ys {
				width: 1160px;
				height: 455px;
				margin: 30px auto 10px auto;
				overflow: hidden;
			}
			
			.about_ys_tit {
				width: 100%;
				height: 30px;
			}
			
			.about_ys_tit p:nth-child(1) {
				font-size: 22px;
				color: #666666;
				font-weight: 400;
				text-align: center;
			}
			
			.about_ys_tit p:nth-child(2) {
				font-size: 13px;
				color: #CCCCCC;
				text-align: center;
				line-height: 30px;
			}
			
			.about_box {
				width: 100%;
				height: 427px;
				margin-top: 60px;
				position: relative;
			}
			
			.about_box_left {
				float: left;
				width: 516px;
				height: 324px;
			}
			
			.about_box_left img {
				width: 100%;
				height: 100%;
			}
			
			.about_box_right {
				float: right;
				width: 613px;
				height: 427px;
			}
			
			.about_box_right_p {
				width: 100%;
				height: auto;
			}
			
			.about_box_right_p p {
				color: #999;
				font-size: 13px;
				padding: 0px 10px;
				letter-spacing: 2px;
			}
			
			.rig_line {
				width: 95%;
				height: 1px;
				background: #CCC;
				margin: 10px;
				opacity: 0.4;
			}
			
			.yssm {
				width: 603px;
				height: 150px;
				position: absolute;
				top: 150px;
				right: 0px;
			}
			
			.yssm p:nth-child(1) {
				font-size: 18px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 31px;
				color: rgba(102, 102, 102, 1);
			}
			
			.yssm p:nth-child(2) {
				font-size: 12px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 31px;
				color: #ccc
			}
			
			.yssm p:nth-child(3) {
				font-size: 14px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 19px;
				color: rgba(153, 153, 153, 1);
				letter-spacing: 2px;
				opacity: 1;
			}
			
			.yssm1 {
				width: 603px;
				height: 150px;
				position: absolute;
				top: 245px;
				right: 0px;
			}
			
			.yssm1 p:nth-child(1) {
				font-size: 18px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 31px;
				color: rgba(102, 102, 102, 1);
			}
			
			.yssm1 p:nth-child(2) {
				font-size: 12px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 31px;
				color: #ccc
			}
			
			.yssm1 p:nth-child(3) {
				font-size: 14px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 19px;
				color: rgba(153, 153, 153, 1);
				letter-spacing: 2px;
				opacity: 1;
			}
			
			.ys_val {
				width: 1160px;
				height: 320px;
				margin: 0 auto;
				overflow: hidden;
			}
			
			.ys_val_title {
				width: 100%;
				height: 30px;
			}
			
			.ys_val_title p:nth-child(1) {
				font-size: 22px;
				color: #666666;
				font-weight: 400;
				text-align: center;
			}
			
			.ys_val_title p:nth-child(2) {
				font-size: 13px;
				color: #CCCCCC;
				text-align: center;
				line-height: 30px;
			}
			
			.ys_val_list {
				width: 100%;
				height: 313px;
				margin: 50px auto;
			}
			
			.ys_val_list ul li {
				width: 303px;
				height: 170px;
				margin: 12px 40px;
				display: inline-block;
				position: relative;
			}
			
			.ys_val_list_imgbox {
				width: 100px;
				height: 100px;
				background: linear-gradient(180deg, rgba(97, 81, 251, 1) 0%, rgba(122, 65, 216, 1) 100%);
				border-radius: 50%;
				position: absolute;
				top: 10px;
				left: 90px;
			}
			
			.ys_val_list_imgbox img {
				width: 60px;
				height: 60px;
				position: absolute;
				top: 18px;
				left: 20px;
			}
			
			.ys_val_list ul li p {
				text-align: center;
				margin-top: 120px;
				font-size: 13px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 21px;
				color: rgba(153, 153, 153, 1);
			}
			
			.val_line {
				width: 98%;
				height: 1px;
				background: #CCCCCC;
				opacity: 0.4;
				margin: 0 auto;
			}
			/**/
			
			.trem {
				width: 1160px;
				height: 400px;
				margin: 0px auto 150px auto;
			}
			
			.trem_list {
				width: 100%;
				height: 313px;
				margin: 120px auto;
			}
			
			.trem_list ul li {
				width: 303px;
				height: 310px;
				margin: 12px 40px;
				display: inline-block;
				border-radius: 10px;
				box-shadow: 0px 0px 40px rgba(121, 178, 255, 0.48);
				position: relative;
			}
			
			.trem_list_box {
				width: 100px;
				height: 100px;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 0px 40px rgba(121, 178, 255, 0.48);
				border-radius: 50%;
				position: absolute;
				top: -51px;
				left: 100px;
			}
			
			.trem_list_img {
				width: 83px;
				height: 83px;
				background: linear-gradient(180deg, rgba(97, 81, 251, 1) 0%, rgba(122, 65, 216, 1) 100%);
				border-radius: 100%;
				position: absolute;
				top: 8px;
				left: 8px;
			}
			
			.trem_list_img img {
				width: 50px;
				height: 50px;
				position: absolute;
				top: 18px;
				left: 16px;
			}
			
			.trem_list ul li h2 {
				position: absolute;
				top: 53px;
				left: 121px;
				font-size: 18px;
			}
			
			.trem_list ul li .p1 {
				position: absolute;
				top: 82px;
				left: 121px;
				font-size: 12px;
				color: #CCCCCC;
			}
			
			.trem_list ul li .p2 {
				position: absolute;
				top: 105px;
				left: 91px;
				font-size: 14px;
				color: #666666;
			}
			
			.trem_list ul li span {
				position: absolute;
				top: 146px;
				left: 0px;
				font-size: 14px;
				color: #999;
				margin: 8px 9px;
			}
</style>
    
    
    
    
   