import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>Elite Sill: learn everything from anywhere.</h2>
    <a href="index.html"> "Button"</a>
    <section class="course-1">
      <div class="box">
        <img src="images/course-1.png" alt="" />
        <h3>web design</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          earum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>

      <div class="box">
        <img src="images/course-2.png" alt="" />
        <h3>seo marketing</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          earum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>

      <div class="box">
        <img src="images/course-3.png" alt="" />
        <h3>science & biology</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          earum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <div class="box">
        <img src="images/course-4.png" alt="" />
        <h3>music & dance</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
          earum.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <ul>
                    <li><a href="course-1.html">course 01</a></li>
                    <li><a href="course-2.html">course 02</a></li>
                    <li><a href="course-3.html">course 03</a></li>
                </ul>
            </li>
            <li><a href="#">pages +</a>
                <ul>
                    <li><a href="teachers.html">teachers</a></li>
                    <li><a href="blog.html">blogs</a></li>
                </ul>
            </li>
            <li><a href="contact.html">contact</a></li>
        </ul>
    </nav>

</header>

<!-- header section ends -->

<!-- home section starts  -->

<section class="home">

    <div class="image">
        <img src="images/home-img.png" alt="">
    </div>

    <div class="content">
        <h3>your course to success</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque neque quam amet perferendis sed rem ut tenetur porro praesentium.</p>
        <a href="#" class="btn">get started</a>
    </div>

</section>

<!-- home section ends -->

<!-- categories section starts  -->

<section class="category">

    <a href="#" class="box">
        <img src="images/category-1.png" alt="">
        <h3>computer science</h3>
    </a>

    <a href="#" class="box">
        <img src="images/category-2.png" alt="">
        <h3>biology & life</h3>
    </a>

    <a href="#" class="box">
        <img src="images/category-3.png" alt="">
        <h3>business analysis</h3>
    </a>

    <a href="#" class="box">
        <img src="images/category-4.png" alt="">
        <h3>social science</h3>
    </a>

    <a href="#" class="box">
        <img src="images/category-5.png" alt="">
        <h3>data analysis</h3>
    </a>

</section>

<!-- categories section ends -->












<!-- footer section starts  -->

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>explore</h3>
            <a href="home.html"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="about.html"> <i class="fas fa-arrow-right"></i> about </a>
            <a href="course-1.html"> <i class="fas fa-arrow-right"></i> course-1 </a>
            <a href="course-2.html"> <i class="fas fa-arrow-right"></i>course-2 </a>
            <a href="course-3.html"> <i class="fas fa-arrow-right"></i> course-3 </a>
            <a href="teachers.html"> <i class="fas fa-arrow-right"></i> teachers </a>
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

    <div class="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

</section>

<!-- footer section ends -->

<!-- custom js file link  -->

    </section>
    <h3>
      Weather in ${state.weather.city} ${state.weather.temp}F, feels like
      ${state.weather.feelsLike}F
    </h3>
  </section>
`;
