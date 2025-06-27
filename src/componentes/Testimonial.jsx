import React from 'react';

function Testimonial() {
  return (
    <section id = "test">
         <h1 class="proyectos">
            Testimonios
        </h1>
<div className="container1">
      <div className="testimonial-card">
        <div className="profile-pic">
          <img src="https://byrontosh.netlify.app/images/image-daniel.jpg" alt="Daniel Clifford" />
        </div>
        <div className="testimonial-content">
          <h3>Daniel Clifford</h3>
          <p>Verified Graduate</p>
          <p>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.</p>
          <p>
            "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
          </p>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="profile-pic">
          <img src="https://byrontosh.netlify.app/images/image-jonathan.jpg" alt="Jonathan Walters" />
        </div>
        <div className="testimonial-content">
          <h3>Jonathan Walters</h3>
          <p>Verified Graduate</p>
          <p>The team was very supportive and kept me motivated, especially during tough times in the bootcamp. I couldn't have completed the course without the help of the instructors and my fellow students.</p>
          <p>
            "I've always struggled with learning new technologies. I have a full-time job, and it's been hard to dedicate time to learn new skills. I decided to join the bootcamp and it was one of the best decisions I've made. The next 12 weeks was a true challenge, but incredibly rewarding. After completing the course, I now work as a Software Engineer at a major tech company."
          </p>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="profile-pic">
          <img src="https://byrontosh.netlify.app/images/image-jeanette.jpg" alt="Jeanette Harmon" />
        </div>
        <div className="testimonial-content">
          <h3>Jeanette Harmon</h3>
          <p>Verified Graduate</p>
          <p>The curriculum was well-structured and the support from the instructors was excellent. I felt confident applying for jobs after completing the program.</p>
          <p>
            "I was skeptical about the bootcamp at first, but once I got started, I couldn't stop. The material was engaging, and the instructors were very knowledgeable and supportive. I've now landed a job as a Junior Developer at a growing startup."
          </p>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="profile-pic">
          <img src="https://byrontosh.netlify.app/images/image-patrick.jpg" alt="Patrick Abrams" />
        </div>
        <div className="testimonial-content">
          <h3>Patrick Abrams</h3>
          <p>Verified Graduate</p>
          <p>The bootcamp gave me the confidence and skills I needed to excel in my new role. I couldn't recommend it more highly.</p>
          <p>
            "I've always been interested in tech, but never had the courage to make a career change. The bootcamp gave me the push I needed to finally make the leap. The curriculum was challenging, but the instructors and my classmates were incredibly supportive. I'm now working as a Software Engineer at a leading tech company."
          </p>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Testimonial;
