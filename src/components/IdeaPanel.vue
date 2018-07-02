<template>
<div class='bg'>
 <swiper :options='swiperOption'>
    <swiper-slide v-for="(idea, idx) of ideas" v-bind:key="idx">
      <div class='swiper-slide'>
			<div class='swiper-content'>
				<div class='hero new-york'>
					<div class='calendar'>
						<span class='date'>
               {{getDay(idea.createTime)}}
              </span>
						<span class='month'>
                {{getMonth(idea.createTime)}}
              </span>
					</div>
				</div>
				<div class='copy'>
					<h1>{{idea.purpose}}</h1>
					<h3>{{idea.title}}</h3>
					<p>{{idea.abstract}}</p>
					<div class='footer'>
						<div class='time'>
							<div><i class='fas fa-clock fa-fw'></i> 6 mins ago</div>
						</div>
						<div class='comments'>
							<div><i class='fas fa-comments fa-fw'></i> 39 comments</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </swiper-slide>

  </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'IdeaPanel',
  props: {
    ideas: {
      type: Array
    }
  },
  methods: {
    getDay: function (timestamp) {
      let date = new Date(timestamp)
      return date.toDateString().split(' ')[2]
    },
    getMonth: function (timestamp) {
      let date = new Date(timestamp)
      return date.toDateString().split(' ')[1]
    }
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoHeight: true,
        direction: 'horizontal',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>

.bg {
  background-color: #CCCCCC
}

h1 {
  font-size: 1.8rem;
  padding: 0;
  margin: 0 10px 0 0;
}

h3 {
  font-size: 1.3rem;
  padding: 0;
  margin: 5px 0 15px 0;
  color: darkred;
}

p {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: graytext;
}
.swiper-slide {
  width: 400px;
  height: 500px;
  padding: 5px;
}
.swiper-content {
  background-color: #fff;
  width: 100%;
  height: 100%;
}
.hero {
  width: 100%;
  height: 175px;
  position: relative;
}
.calendar {
  width: 60px;
  height: 60px;
  float: right;
  background-color: darkred;
  border-radius: 50%;
  margin-right: 15px;
  margin-top: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.date {
  font-size: 1.2rem;
  line-height: 1.3rem;
}

.month {
  font-size: 0.8rem;
}
.copy {
  padding: 20px;
}
.footer {
  position: absolute;
  bottom: 0;
  margin-bottom: 35px;
  color: graytext;
}
.time {
  display: inline-block;
}
.comments {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.2s all;
}

.comments {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.2s all;
}

.new-york {
			background: url('https://daytripsontario.files.wordpress.com/2017/03/img_6859-copy.jpg');
			background-position: center;
			background-size: cover;
}
</style>
