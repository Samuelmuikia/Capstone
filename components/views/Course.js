import html from "html-literal";
import courseImage from "../../images/course-1.png";

export default state => html`
  <section>
    <h1>
       ${state.courses}
    </h1>
    <img src="${courseImage}" alt="" /> -->
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum
    </p>
    <table>
    <tr>
    <th>Price</th>
    <th>Posted Date</th>
    <th>description</th>
  </tr>
  <tr>
    <td>$</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
    </table>
    </section>
  </h1>
  </section>
`;
