import html from "html-literal";

export default () => html`
  <section id="jumbotron">
    <h2>Elite Sill: learn everything from anywhere.</h2>
    <a href="index.html">"Call to Action" "Button"</a>
  </section>
  <h3>
    Weather in ${state.weather.city} $(state.weather.temp)}F, feels like
    $(state.weather.feelsLike)}F
  </h3>
`;
