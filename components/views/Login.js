import html from "html-literal";

export default () => html`
  <section id="login">
    <form id="login" method="POST" action="">
      <h2>Get a Course</h2>
      <div>
        <label for="subject">I am:</label>
        <select id="subject" name="subject">
          <option value="">Select a Subject</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter YourName"
          required
        />
      </div>
      <div>
        <label for="coursename">Sauce:</label>
        <input
          type="text"
          name="course"
          id="course"
          placeholder="Enter course"
          required
        />
      </div>
      <div>
        <label for="courses">Courses:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="subject"
          value="course"
        />
        <label for="cor1">courses</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="subject"
          value="ui"
        />
        <label for="cor2">ui</label>
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
        <label for="cor5">red pepper</label>
      </div>
      <input
        type="hidden"
        name="customer"
        id="customer"
        value="Anonymous Customer"
      />
      <input type="submit" name="submit" value="Submit courses" />
    </form>
  </section>
`;
