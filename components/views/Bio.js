import html from "html-literal";
import bioImage from "../../images/about-img.png";

export default () => html`
  <section id="bio"></section>
    <section class="about">
      <div class="image">
        <img src="${bioImage}" class="bioImage" alt="" />
      </div>
      <section class="heading">
        <h3>about us</h3>
        <p><a href="home.html">home >></a> about</p>
      </section>

      <div class="content">
        <h3>I will stay with you until you pass your exam.</h3>
        <p>
        At eliteskill, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.
Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, members come together to find inspiration and take the next step in their creative journey.
        </p>
        <a href="#" class="btn">learn more</a>
      </div>
    </section>

    <p>
    Tomorrow’s skills, today
    eliteskill mission is to create new possibilities for people and organizations everywhere by connecting them to the knowledge and skills they need to succeed in a changing world.

Fueled by the Udemy marketplace, Udemy Business helps companies achieve critical business outcomes and stay competitive by offering fresh, relevant, and personalized on-demand learning. The Udemy Business subscription is a curation of top-rated courses taught by real-world experts from the Udemy marketplace. Our content covers key business and technical topics ranging from development and IT to leadership, marketing, design, stress management, and much more. In addition to a curated content collection, we offer a platform to drive effective learning as well as tools for leaders to host and distribute their own proprietary content.
    </p>
    <!-- <p>
      Quisque at hendrerit libero, eget interdum lectus. Etiam facilisis leo
      nulla, sit amet imperdiet nunc molestie vel. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Curabitur
      consectetur felis a purus volutpat, sed finibus magna iaculis.
      Pellentesque tristique tristique turpis nec vehicula. Maecenas varius quis
      tellus id mollis. Vivamus ut ultrices ligula.
    </p>
    <p>
      Etiam egestas consectetur gravida. Nulla mollis suscipit sapien sed
      fermentum. Integer vitae eros a magna vulputate aliquam. Suspendisse sed
      pulvinar augue, auctor mollis lectus. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend
      diam quis libero sollicitudin efficitur. Nullam sapien eros, tempor eget
      vulputate ut, interdum vel orci. Donec sit amet tempor mi. Nam feugiat
      cursus egestas. Suspendisse eget orci et ex mattis ornare tempor non
      tellus. Suspendisse gravida neque in urna congue bibendum. Duis dui odio,
      pharetra nec odio ac, ornare vulputate nibh.
    </p> -->
  </section>
`;
