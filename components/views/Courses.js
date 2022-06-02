import html from "html-literal";

export default () => html`
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
          }</td><td>${courses.seo.join(" & ")}</td><td>${
            course.customer
          }</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
