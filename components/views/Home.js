import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>learn everything from anywhere.</h2>
    <a href="index.html"> "Button"</a>
    <section class="course-1">
      <div class="box">
        <img src="images/course-1.png" alt="" />
        <h3>web design</h3>
        <p>
        Web design is what creates the overall look and feel when you’re using a website... </p>
        <a href="#" class="btn">read more</a>
      </div>

      <div class="box">
        <img src="images/course-2.png" alt="" />
        <h3>seo marketing</h3>
        <p>
        What Is SEO / Search Engine Optimization?
SEO stands for “search engine optimization.” In simple terms, it means...
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
      <!-- <ul>
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
    </nav> -->

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
    </a> --> -->

    <a href="#" class="box">
        <img src="images/category-5.png" alt="">
        <h3>data analysis</h3>
    </a>

</section>

<!-- categories section ends -->


<!-- custom js file link  -->

    </section>
    <h3>
      Weather in ${state.weather.city} ${state.weather.temp}F, feels like
      ${state.weather.feelsLike}F
    </h3>
  </section>
`;
