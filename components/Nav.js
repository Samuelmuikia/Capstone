import html from "html-literal";
import logo from "../images/Elite-Skills-logo.png";

export default links => html`
  <nav>
    <img src="${logo}" alt="" />
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}

    </ul>
  </nav>
  ;
`;
