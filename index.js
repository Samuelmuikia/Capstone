import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  // // Add to every view
  // // add event listeners to Nav items for navigation
  // document.querySelectorAll("nav a").forEach(navLink =>
  //   navLink.addEventListener("click", event => {
  //     event.preventDefault();
  //     render(store[event.target.title]);
  //   })
  // );
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // if (state.view === "Login") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();
  //     const inputList = event.target.elements;

  //     const courses = [];
  //     for (let input of inputList.Courses) {
  //       if (input.checked) {
  //         courses.push(input.value);
  //       }
  //     }
  //     const requestData = {
  //       uiux: inputList.uiux.value,
  //       blockchain: inputList.blockchain.value,
  //       coding: inputList.coding.value,
  //       courses: courses,
  //       customer: "~Update with YOUR name~"
  //     };

  //      axios
  //         .post(process.env.`${COURSES_API_URL}`, requestData)
  //         .then(response => {
  //           console.log(response.data);
  //           store.Course.Courses.push(response.data);
  //           router.navigate("/Course");
  //         })
  //         .catch(error => {
  //           console.log("It puked", error);
  //         });
  //     });
  //   }
  // }
}
router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      view = capitalize(params.data.view);
    }

    if (view === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          store.Home.weather = {};
          store.Home.weather.city = response.data.name;
          store.Home.weather.temp = response.data.main.temp;
          store.Home.weather.feelsLike = response.data.main.feels_like;
          store.Home.weather.description = response.data.weather[0].main;
          done();
          console.log();
        })

        .catch(err => {
          console.log(err);
          done();
        });
    } else if (view === "Courses") {
      // axios
      //   .get(`${process.env.COURSES_API_URL}`)
      //   .then(response => {
      //     store.Course.Courses = response.data;
      //     done();
      //   })
      //   .catch(error => {
      //     console.log("It puked", error);
      //     done();
      //   });
      done();
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => {
      render();
    },
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://ipix-lms.p.rapidapi.comhttps//www.ipixtechnologies.com/learning-management-system.html',
    headers: {
      'X-RapidAPI-Key': 'X-RapidAPI',
      'X-RapidAPI-Host': 'ipix-lms.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
