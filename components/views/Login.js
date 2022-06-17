import html from "html-literal";

export default state => html`
  <!-- modify this form HTML and place wherever you want your form -->
  <form action="https://formspree.io/f/mlezvkwr" method="POST">
    <label>
      Your name :
      <input
        type="name"
        name="name"
        id="defaultContactForName"
        class="form-control mb-4"
        placeholder="subject"
      />>
    </label>
    <label>
      Your email:
      <input
        type="email"
        name="email"
        id="defaultContactForEmail"
        class="form-control mb-4"
        placeholder="subject"
      />
    </label>
    <label>
      Your message:
      <textarea name="message"></textarea>
    </label>
    <!-- your other form fields go here -->
    <button class="btn btn-info btn-block" type="submit">Send</button>
  </form>
`;
