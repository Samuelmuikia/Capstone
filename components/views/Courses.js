import html from "html-literal";
import courseOneImage from "../../images/course-1.png";
import courseTwoImage from "../../images/course-2.png";
import courseThreeImage from "../../images/course-3.png";
import courseFourImage from "../../images/course-4.png";
import courseFiveImage from "../../images/course-5.png";
import courseSixImage from "../../images/course-6.png";
import courseSevenImage from "../../images/course-7.png";
import courseEightImage from "../../images/course-8.png";
import courseNineImage from "../../images/course-9.png";

export default state => html`
  <section id="course">
    <table id="courses">
      <tr>
        <th>UiUX</th>
        <th>Blockchain</th>
        <th>Coding</th>
        <th>Seo</th>
        <th>Customer</th>
      </tr>

      ${state.courses
        .map(course => {
          return `<tr><td>${course.uxui}</td><td>${course.blockchain}</td><td>${
            course.coding
          }</td><td>${course.seo.join(" & ")}</td><td>${
            course.customer
          }</td></tr>`;
        })
        .join("")}
    </table>

    <!-- <li>
      <a href="#">courses +</a>
      </li> -->
      <!-- course-1 section starts  -->

      <section class="course-1">
        <div class="box">
        <div class="image">
        <img src="${courseOneImage}" alt="" />
        <h3>web design</h3>
          <p>
          Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design. While the terms web design and web development are often used interchangeably, web design is technically a subset of the broader category of web development....
          </p>
          <a href="http://localhost:1234/course" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseTwoImage}" alt="" />
          <h3>seo marketing</h3>
          <p>
          When you’re building your online presence, you’ll come across many different strategies you can use to grow your business organically — including search engine optimization (SEO) marketing. SEO marketing is an excellent strategy for attracting leads, generating sales, and more. If you’re looking to earn more traffic from this strategy, enter your URL here to receive personalized recommendations instantly....
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseThreeImage}" alt="" />
          <h3>science & biology</h3>
          <p>
          Biology Is The Study Of Life. The Word "Biology" Is Derived From The Greek Words "Bios" (Meaning Life) And "Logos" (Meaning "Study"). In General, Biologists Study The Structure, Function, Growth, Origin, Evolution And Distribution Of Living Organisms...
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <h3>music & dance</h3>
        <img src="${courseFourImage}" alt="" />          <h3>music & dance</h3>
          <p>
          Dance Music Is Music Composed Specifically To Facilitate Or Accompany Dancing. It Can Be Either A Whole Musical Piece Or Part Of A Larger Musical Arrangement...
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseFiveImage}" alt="" />
          <h3>digital marketing</h3>
          <p>
          Digital Marketing
Any marketing that uses electronic devices and can be used by marketing specialists to convey promotional messaging and measure its impact through your customer journey.
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseSixImage}" alt="" />
        <h3>maths & statistics</h3>
          <p>
          Statistics is a branch of mathematics which deals with numbers and data analysis. Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data. Statistical theory defines a statistic as a function of a sample where the function itself is independent of the sample’s distribution...
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseSevenImage}" alt="" />
          <h3>data analysis</h3>
          <p>
          Data analysis is the process of collecting, modeling, and analyzing data to extract insights that support decision-making. There are several methods and techniques to perform analysis depending on the industry and the aim of the investigation...
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseEightImage}" alt="" />
          <h3>email marketing</h3>
          <p>
          Email marketing is a powerful marketing channel, a form of direct marketing as well as digital marketing, that uses email to promote your business’s products or services. It can help make your customers aware of your latest items or offers by integrating it into your marketing automation efforts...
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
        <div class="image">
        <img src="${courseNineImage}" alt="" />
          <h3>graphic design</h3>
          <p>
          Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience....
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </section>
      <!-- <a href="#">courses +</a> -->
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
        </ul> -->
      <!-- </li> -->
    </li>
  </section>
`;
