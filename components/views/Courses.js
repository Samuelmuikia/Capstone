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
  </section>
`;
