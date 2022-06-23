import html from "html-literal";
import teacherOneImage from "../../images/teacher-1.png";
import teacherTwoImage from "../../images/teacher-2.png";
import teacherThreeImage from "../../images/teacher-3.png";
import teacherFourImage from "../../images/teacher-4.png";
import teacherFiveImage from "../../images/teacher-5.png";
import teacherSixImage from "../../images/teacher-6.png";
import teacherSevenImage from "../../images/teacher-6.png";
import teacherEightImage from "../../images/teacher-6.png";

export default state => html`
  <section id="Teacher">
    <form id="addCourse" method="POST" action="">
      <h2>Add a Course</h2>
      <!-- <div>
        <label for="subject">I am:</label>
        <select id="subject" name="subject">
          <option value="">Select a Subject</option>
           <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div> -->
      <div>
        <label for="customer">Name:</label>
        <input
          type="text"
          name="customer"
          id="customer"
          placeholder="Enter YourName"
          required
        />
      </div>
      <div>
        <label for="uiux">Course:</label>
        <input
          type="text"
          name="uiux"
          id="uiux"
          placeholder="Enter Teacher"
          required
        />
      </div>
      <div>
        <label for="blockchain">Subject:</label>
        <input
          type="text"
          name="blockchain"
          id="blockchain"
          placeholder="Enter Teacher"
          required
        />
      </div>
      <div>
        <label for="coding">coding:</label>
        <input
          type="text"
          name="coding"
          id="coding"
          placeholder="Enter Teacher"
          required
        />
      </div>
      <div>
        <label for="seo">seo:</label>
        <input type="text" name="seo" id="seo" placeholder="Enter Teacher" />
      </div>
      <!-- <div>
        <label for="Teachers">Teachers:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="subject"
          value="Teacher"
        />
        <label for="cor1">Teachers</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="subject"
          value="ui"
        />
        <label for="cor2">uiux</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="subject"
          value="coding"
        />
        <label for="cor3">coding</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="subject"
          value="Blockchain"
        />
        <label for="corp4">Blockchain</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="subject"
          value="seo"
        />
        <label for="cor5">web design</label>
      </div> -->
      <!-- <input
        type="hidden"
        name="customer"
        id="customer"
        value="Anonymous Customer"
      /> -->
      <input type="submit" name="submit" value="Submit Teachers" />
    </form>
    <body>
      <!-- header section starts  -->

      <!-- <header class="header">
        <a href="home.html" class="logo">
          <i class="fas fa"></i> Elite Skill
        </a>

        <div id="menu-btn" class="fas fa-bars"></div>

        <nav class="navbar">
          <ul>
            <li><a href="home.html">home</a></li>
            <li><a href="about.html">about</a></li>
            <li>
              <a href="#">Teachers +</a>
              <ul>
                <li><a href="Teacher-1.html">Teacher 01</a></li>
                <li><a href="Teacher-2.html">Teacher 02</a></li>
                <li><a href="Teacher-3.html">Teacher 03</a></li>
              </ul>
            </li>
            <li>
              <a href="#">pages +</a>
              <ul>
                <li><a href="teachers.html">teachers</a></li>
                <li><a href="blog.html">blogs</a></li>
              </ul>
            </li>
            <li><a href="contact.html">contact</a></li>
          </ul>
        </nav>
      </header> -->

      <!-- header section ends -->

      <section class="heading">
        <h3>our teachers</h3>
        <p><a href="home.html">home >></a> teachers</p>
      </section>

      <!-- teachers section starts  -->

      <section class="teachers">
        <div class="box">
          <div class="image">
            <img src="${teacherOneImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherTwoImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherThreeImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherFourImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherFiveImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherSixImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherSevenImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>

        <div class="box">
          <div class="image">
            <img src="${teacherEightImage}" alt="" />
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-instagram"></a>
              <a href="#" class="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="content">
            <h3>john deo</h3>
            <span>web designer</span>
          </div>
        </div>
      </section>
    </body>
  </section>
`;
