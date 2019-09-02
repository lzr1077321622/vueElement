import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ZhaoPin from '@/components/ZhaoPin'
import Course from '@/components/Course'
import Zhaomore from '@/components/ZhaoPin_more'
import Ziliaomore from '@/components/Ziliao_more'
import Aboutme from '@/components/Aboutme'
import Question from '@/components/Question'
import CourseDetail from '@/components/courseDetail'
import QuestionMore from '@/components/QuestionMore'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'Index',
      component: Index
    },
    {//问答
      path: '/Question',
      name: 'Question',
      component: Question
    },
     {//课程
      path: '/Course',
      name: 'Course',
      component: Course
    },
     {//课程详情页
      path: '/courseDetail',
      name: 'courseDetail',
      component: CourseDetail
    },
    {//招聘考勤
      path: '/zhaopindetail',
      name: 'zhaopindetail',
      component: ZhaoPin
    },
     {//招聘考勤列表
      path: '/zhaomore',
      name: 'ZhaoPin_more',
      component: Zhaomore
    },
     {//资料下载列表
      path: '/ziliao',
      name: 'Ziliao_more',
      component: Ziliaomore
    },
    {//资料下载列表
      path: '/aboutme',
      name: 'Aboutme',
      component: Aboutme
    },
     {//问答列表
      path: '/questionMore',
      name: 'QuestionMore',
      component: QuestionMore
    }
  ]
})
