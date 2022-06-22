import html from "html-literal";
import headerImage from "../../images/heading-bg.png";
import maincourseOneImage from "../../images/main-course-1.png";
import maincourseTwoImage from "../../images/main-course-2.png";
import maincourseThreeImage from "../../images/main-course-3.png";
import maincourseFourImage from "../../images/main-course-4.png";
import homeImage from "../../images/home-img.png";

export default state => html`
  <section id="jumbotron">
    <!-- <h2>learn everything from anywhere.</h2>
    <a href="index.html"> "Button"</a> -->


<!-- home section starts  -->

<section class="home">

    <div class="image">
    <img src="${homeImage}" alt="" />
    </div>
    <div class="content">
        <h3>your course to success</h3>
        <p> Success courses are designed to help undergraduate students make successful transitions from a previous level of education, or experience (e.g., the military), into the University, from undeclared status into a major, and/or from undergraduate studies to graduate studies or careers.</p>
        <a href="http://localhost:1234/Course" class="btn">get started</a>
    </div>
</section>

<!-- home section ends -->

    <section class="course-1">
      <div class="box">
      <div class="image">
      <img src="${maincourseOneImage}" alt="" />
        <h3>web design</h3>
        <p>
        Web design is what creates the overall look and feel when you’re using a website... </p>
        <a href="http://localhost:1234/Course" class="btn">read more</a>

      </div>

      <div class="box">
      <div class="image">
      <img src="${maincourseTwoImage}" alt="" />
        <h3>seo marketing</h3>
        <p>
        What Is SEO / Search Engine Optimization?
SEO stands for “search engine optimization.” In simple terms, it means...
        </p>
        <a href="http://localhost:1234/Course" class="btn">read more</a>
      </div>

      <div class="box">
      <div class="image">
      <img src="${maincourseThreeImage}" alt="" />
        <h3>science & biology</h3>
        <p>
        Biology is the study of life. The word "biology" is derived from the Greek words "bios" (meaning life) and "logos" (meaning "study"). In general, biologists study the structure, function, growth, origin, evolution and distribution of living organisms.
        </p>
        <a href="http://localhost:1234/Course" class="btn">read more</a>
      </div>
      <div class="box">
      <div class="image">
      <img src="${maincourseFourImage}" alt="" />
        <h3>music & dance</h3>
        <p>
        Dance music is music composed specifically to facilitate or accompany dancing. It can be either a whole musical piece or part of a larger musical arrangement.
        </p>
        <a href="http://localhost:1234/Course" class="btn">read more</a>
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

    </section>

header section ends -->



<!-- categories section starts  -->

 <section class="category">
 <a href="#" class="box">

        <h3>computer science</h3>
    </a>

    <a href="#" class="box">

        <h3>biology & life</h3>
    </a>

    <a href="#" class="box">

                <h3>business analysis</h3>
    </a>

    <a href="#" class="box">

        <h3>social science</h3>
    </a> --> -->

    <a href="#" class="box">

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
