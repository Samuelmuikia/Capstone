import html from "html-literal";

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

    <li>
      <a href="#">courses +</a>

      <!-- course-1 section starts  -->

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

        <div class="box">
          <img src="images/course-5.png" alt="" />
          <h3>digital marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
          <img src="images/course-6.png" alt="" />
          <h3>maths & statistics</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
          <img src="images/course-7.png" alt="" />
          <h3>data analysis</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
          <img src="images/course-8.png" alt="" />
          <h3>email marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
          <img src="images/course-9.png" alt="" />
          <h3>graphic design</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <a href="#" class="btn">read more</a>
        </div>
      </section>
      <a href="#">courses +</a>
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
  </section>
`;
