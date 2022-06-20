import html from "html-literal";

export default () => html`
  <footer>
    &copy; 2020 <a href="https://savvycoders.com/">Savvy Coders</a>
  </footer>
  <!-- footer section starts  -->

  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>explore</h3>
        <a href="home.html"> <i class="fas fa-arrow-right"></i> home </a>
        <a href="about.html"> <i class="fas fa-arrow-right"></i> about </a>
        <a href="course-1.html">
          <i class="fas fa-arrow-right"></i> course-1
        </a>
        <a href="course-2.html"> <i class="fas fa-arrow-right"></i>course-2 </a>
        <a href="course-3.html">
          <i class="fas fa-arrow-right"></i> course-3
        </a>
        <a href="teachers.html">
          <i class="fas fa-arrow-right"></i> teachers
        </a>
        <a href="blog.html"> <i class="fas fa-arrow-right"></i> blog </a>
        <a href="contact.html"> <i class="fas fa-arrow-right"></i> contact </a>
      </div>

      <div class="box">
        <h3>categories</h3>
        <a href="#"> <i class="fas fa-arrow-right"></i> web design </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> graphic design</a>
        <a href="#"> <i class="fas fa-arrow-right"></i> UI / UX design</a>
        <a href="#"> <i class="fas fa-arrow-right"></i> seo marketing</a>
        <a href="#"> <i class="fas fa-arrow-right"></i> digital marketing</a>
        <a href="#"> <i class="fas fa-arrow-right"></i> email marketing</a>
        <a href="#"> <i class="fas fa-arrow-right"></i> all courses</a>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="#"> <i class="fas fa-arrow-right"></i> my account </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> feedback </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> help center </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> certificates </a>
        <a href="#"> <i class="fas fa-arrow-right"></i> newsletter </a>
      </div>

      <div class="box">
        <h3>follow us</h3>
        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
        <a href="#"> <i class="fab fa-github"></i> github </a>
      </div>
    </div>

    <!-- <div class="credit"> created by <span>mr. web designer</span> | all rights reserved! </div> -->
  </section>

  <!-- footer section ends -->
`;
