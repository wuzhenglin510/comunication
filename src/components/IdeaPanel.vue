<template>
<div>
 <swiper :options='swiperOption'>
    <!-- slides -->
    <swiper-slide>
      <div class='swiper-slide'>
			<div class='swiper-content'>
				<div class='hero new-york'>
					<div class='calendar'>
						<span class='date'>
               27
              </span>
						<span class='month'>
                MAR
              </span>
					</div>
					<div class='photo-btn'>
            <div class='text'>Photos
            </div>
            <div class='gallery'>
              <div class='row top'>
              <div class='image one'>
              </div>
              <div class='image two'>
              </div>
              <div class='image three'>
              </div>
              </div>
                <div class='row middle'>
              <div class='image one'>
              </div>
              <div class='image two'>
              </div>
              <div class='image three'>
              </div>
              </div>
                <div class='row bottom'>
                <div class='image one'>
              </div>
              <div class='image two'>
              </div>
              <div class='image three'>
              </div>
              </div>
            </div>
            </div>
				</div>
				<div class='copy'>
					<h1>New York City</h1>
					<h3>The city that never sleeps.</h3>
					<p>Situated on one of the world's largest natural harbors, New York City consists of five boroughs, each of which is a separate county of the State of New York. The five boroughs – Brooklyn, Queens, Manhattan, The Bronx, and Staten Island – were consolidated into a single city in 1898. Also, Taryn lives here.</p>
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
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>

  </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "IdeaPanel",
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoHeight: true,
        direction: "horizontal",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
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
			background: url("https://daytripsontario.files.wordpress.com/2017/03/img_6859-copy.jpg");
			background-position: center;
			background-size: cover;
}
</style>
