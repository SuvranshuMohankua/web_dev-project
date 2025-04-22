import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

import './styles.css'

const Homepage = () => {

  const navigate = useNavigate();
  return (
  <>

<div className="homepage">
      {/* Video Background */}
      <video className="video-bg" autoPlay loop muted>
        <source src={assets.videoClip} type="video/mp4" />
        <p>Video is not supported or not found. Please check the file path and video format.</p>
      </video>

      {/* Content on Top */}
      <div className="overlay">
        <h4>BUILD YOUR PERSONALIZED FITNESS PLAN TODAY</h4>
        <h1><span>ACHIEVE</span> YOUR FITNESS GOALS, YOUR WAY</h1>
        <p>
          Discover the power of a fitness plan designed just for you. Whether you are aiming to build muscle, lose weight, 
          or improve your overall health, our app creates a personalized training plan that adapts to your goals, fitness 
          level, and available equipment. Track your progress, visualize your success, and stay motivated on your journey.
        </p>
        <button className="btn">Start Your Journey</button>
      </div>
    </div>

    <header className="section__container header__container">
      <div className="header__content">
        <span className="bg__blur"></span>
        <span className="bg__blur header__blur"></span>
        <h4>BEST FITNESS IN THE TOWN</h4>
        <h1><span>PERSONALIZED</span>  FITNESS, JUST FOR YOU</h1>
        <p>
        Unlock the power of AI-driven fitness! Get a training plan tailored to your goals, fitness level, and available 
    equipment. Track progress, visualize results, and stay motivated with expert coaching—all in one app. 
    Your transformation starts today!
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="header__image">
        <img src={assets.img2} alt="header" />
      </div>
    </header>



    <section className="section__container explore__container">
      <div className="explore__header">
        <h2 className="section__header">EXPLORE OUR PROGRAM</h2>

        <div className="explore__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <p className="section-description">
        From strength training and yoga to cardio and weight loss programs,
        we offer a variety of workouts to keep you motivated and on track.
        Join us and find the perfect program for you.
      </p>
      <div className="explore__grid">
        <div className="explore__card">
          <span><i className="ri-boxing-fill"></i></span>
          <h4>Strength</h4>
          <p>
            Embrace the essence of strength as we delve into its various
            dimensions physical, mental, and emotional.
          </p>

          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-heart-pulse-fill"></i></span>
          <h4>Physical Fitness</h4>
          <p>
            It encompasses a range of activities that improve health, strength,
            flexibility, and overall well-being.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-run-line"></i></span>
          <h4>Fat Lose</h4>
          <p>
            Through a combination of workout routines and expert guidance, we will
            empower you to reach your goals.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-shopping-basket-fill"></i></span>
          <h4>Weight Gain</h4>
          <p>
            Designed for individuals, our program offers an effective approach
            to gaining weight in a sustainable manner.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="program__card explore__card">
          <img src={assets.program_1} alt="program" />
          <h4>Strength Training</h4>
          <p>
            Build muscle, increase endurance, and enhance overall strength
            with our expert-led resistance and weight training sessions.
          </p>
          <a href="#">
            Learn More
            <span><i className="ri-arrow-right-line"></i></span>
          </a>
        </div>
        <div className="program__card explore__card">
          <img src={assets.program_2} alt="program" />
          <h4>Basic Yoga</h4>
          <p>
            Improve flexibility, balance, and mental well-being with guided
            yoga sessions designed for relaxation and inner peace.
          </p>
          <a href="#">
            Learn More
            <span><i className="ri-arrow-right-line"></i></span>
          </a>
        </div>
        <div className="program__card explore__card">
          <img src={assets.program_3} alt="program" />
          <h4>Body Building</h4>
          <p>
            Sculpt and define your physique with targeted workouts, expert
            coaching, and personalized training plans.
          </p>
          <a href="#">
            Learn More
            <span><i className="ri-arrow-right-line"></i></span>
          </a>
        </div>
        <div className="program__card explore__card">
          <img src={assets.program_4} alt="program" />
          <h4>Weight Loss</h4>
          <p>
            Burn calories, boost metabolism, and achieve your ideal weight
            with our effective fat-burning and cardio-based programs.
          </p>
          <a href="#">
            Learn More
            <span><i className="ri-arrow-right-line"></i></span>
          </a>
        </div>
      </div>

    </section>

    <section className="about" id="about">
      <div className="section__container about__container">
        <div className="about__image">
          <img src={assets.img1} alt="about" />
        </div>
        <div className="about__content">
          <h2 className="section__header">Get Ready To Reach Your Fitness Goals</h2>
          <p className="section__description">
            At FITCLUB, we are committed to helping you achieve your fitness
            goals with expert guidance, personalized workouts, and a motivating
            environment. Whether you aim to build strength, improve endurance,
            or stay active, we provide the right support and training to keep
            you on track.
          </p>
          <p className="section__description">
            Start your journey today and transform your health with the perfect
            exercise routine!
          </p>
          <div className="about__btn">
            <button className="btn">Free Trail Today</button>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container class__container">
      <div className="class__image">
        <span className="bg__blur"></span>
        <img src={assets.img3} alt="class" className="class__img-1" />
        <img src={assets.class_2} alt="class" className="class__img-2" />
      </div>
      <div className="class__content">
        <h2 className="section__header">THE CLASS YOU WILL GET HERE</h2>
        <p>
          Led by our team of expert and motivational instructors, The class You
          Will Get Here is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises. Each class is carefully curated to keep you engaged and
          challenged, ensuring you never hit a plateau in your fitness
          endeavors.
        </p>
        <button className="btn" onClick={()=>navigate('/book-class')}>Book A class</button>
      </div>
    </section>

    <section className="section__container join__container">
      <h2 className="section__header">WHY JOIN US ?</h2>
      <p className="section__subheader">
        Our diverse membership base creates a friendly and supportive
        atmosphere, where you can make friends and stay motivated.
      </p>
      <div className="join__image">
        <img src={assets.img5} alt="Join"/>
        <div className="join__grid">
          <div className="join__card">
            <span><i className="ri-user-star-fill"></i></span>
            <div className="join__card__content">
              <h4>Personal Trainer</h4>
              <p>Unlock your potential with our expert Personal Trainers.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-vidicon-fill"></i></span>
            <div className="join__card__content">
              <h4>Practice Sessions</h4>
              <p>Elevate your fitness with practice sessions.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-building-line"></i></span>
            <div className="join__card__content">
              <h4>Good Management</h4>
              <p>Supportive management, for your fitness success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container price__container">
      <h2 className="section__header">OUR PRICING PLAN</h2>
      <p className="section__subheader">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="price__grid">
        <div className="price__card">
          <div className="price__card__content">
            <h4>Basic Plan</h4>
            <h3>$16</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              At home workouts
            </p>
          </div>
          <button className="btn price__btn">Join Now</button>
        </div>
        <div className="price__card">
          <div className="price__card__content">
            <h4>Weekly Plan</h4>
            <h3>$25</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              PRO Gyms
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              At home workouts
            </p>
          </div>
          <button className="btn price__btn">Join Now</button>
        </div>
        <div className="price__card">
          <div className="price__card__content">
            <h4>Monthly Plan</h4>
            <h3>$45</h3>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              ELITE Gyms & classNamees
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              PRO Gyms
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Smart workout plan
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              At home workouts
            </p>
            <p>
              <i className="ri-checkbox-circle-line"></i>
              Personal Training
            </p>
          </div>
          <button className="btn price__btn">Join Now</button>
        </div>
      </div>
    </section>



    <section className="review">
      <div className="section__container review__container">
        <span><i className="ri-double-quotes-r"></i></span>
        <div className="review__content">
          <h4>MEMBER REVIEW</h4>
          <p>
            What truly sets this gym apart is their expert team of trainers. The
            trainers are knowledgeable, approachable, and genuinely invested in
            helping members achieve their fitness goals. They take the time to
            understand individual needs and create personalized workout plans,
            ensuring maximum results and safety.
          </p>
          <div className="review__rating">
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-half-fill"></i></span>
          </div>
          <div className="review__footer">
            <div className="review__member">
              <img src={assets.member} alt="member" />
              <div className="review__member__details">
                <h4>Jane Cooper</h4>
                <p>Software Developer</p>
              </div>
            </div>
            <div className="review__nav">
              <span><i className="ri-arrow-left-line"></i></span>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="section__container footer__container">
      <span className="bg__blur"></span>
      <span className="bg__blur footer__blur"></span>
      <div className="footer__col">
        <div className="footer__logo"><img src={assets.logo1} alt="logo" /></div>
        <p>
          Take the first step towards a healthier, stronger you with our
          unbeatable pricing plans. Let sweat, achieve, and conquer together!
        </p>
        <div className="footer__socials">
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-line"></i></a>
          <a href="#"><i className="ri-twitter-fill"></i></a>
        </div>
      </div>
      <div className="footer__col">
        <h4>Company</h4>
        <a href="#">Business</a>
        <a href="#">Franchise</a>
        <a href="#">Partnership</a>
        <a href="#">Network</a>
      </div>
      <div className="footer__col">
        <h4>About Us</h4>
        <a href="#">Blogs</a>
        <a href="#">Security</a>
        <a href="#">Careers</a>
      </div>
      <div className="footer__col">
        <h4>Contact</h4>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">BMI Calculator</a>
      </div>
    </footer>
    <div className="footer__bar">
      Copyright © 2025 . All rights reserved.
    </div>
  </>
)
}

export default Homepage