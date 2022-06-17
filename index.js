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
      //Get Certificate api
      //   const any = {
      //     method: "GET",
      //     url:
      //       "https://certificate-generator1.p.rapidapi.com/certi/a1340ffe-9052-4f45-a613-b7c521a835d9",
      //     headers: {
      //       "X-RapidAPI-Key":
      //         "409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81",
      //       "X-RapidAPI-Host": "certificate-generator1.p.rapidapi.com"
      //     }
      //   };
      //   axios
      //     .request(any)
      //     .then(function(response) {
      //       console.log(response.data);
      //     })
      //     .catch(function(error) {
      //       // console.error(error);
      //     });
    }

    // RoboMatic.AI sms

    if (view === "Home") {
      const encodedParams = new URLSearchParams();
      encodedParams.append("in", "What's 2 plus 5?");
      encodedParams.append("op", "in");
      encodedParams.append("cbot", "1");
      encodedParams.append("SessionID", "RapidAPI1");
      encodedParams.append("ChatSource", "RapidAPI");
      encodedParams.append("cbid", "1");
      encodedParams.append("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");

      const choose = {
        method: "POST",
        url: "https://robomatic-ai.p.rapidapi.com/api.php",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81",
          "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com"
        },
        data: encodedParams
      };

      axios
        .request(choose)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    }

    // //axios;
    //lms API

    // const options = {
    //   method: "GET",
    //   url:
    //     "https://ipix-lms.p.rapidapi.comhttps//www.ipixtechnologies.com/learning-management-system.html",
    //   headers: {
    //     "X-RapidAPI-Key":
    //       "409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81",
    //     "X-RapidAPI-Host": "ipix-lms.p.rapidapi.com"
    //   }
    // };
    // axios
    //   .request(options)
    //   .then(function(response) {
    //     console.log(response.data);
    //     done();
    //   })
    //   .catch(function(error) {
    //     console.error(error);
    //   });
    //}

    //    if (view === "Home"){

    //Verify Certificate

    if (view === "Home") {
      const choice = {
        method: "GET",
        url:
          "https://certificate-generator1.p.rapidapi.com/verify/a1340ffe-9052-4f45-a613-b7c521a835d9",
        headers: {
          "X-RapidAPI-Key":
            "409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81",
          "X-RapidAPI-Host": "certificate-generator1.p.rapidapi.com"
        }
      };

      axios
        .request(choice)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
    //Generate Certificate

    // if (view === "Home") {
    //   const pick = {
    //     method: "POST",
    //     url: "https://certificate-generator1.p.rapidapi.com/certi",
    //     headers: {
    //       "content-type": "application/json",
    //       "X-RapidAPI-Key":
    //         "409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81",
    //       "X-RapidAPI-Host": "certificate-generator1.p.rapidapi.com"
    //     },
    //     data:
    //       '{"orgLogo":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png","issuedTo":"Shlok Kamleshkumar Patel","type":"COURSE","issuedFor":"Intro to Deep Learning","issuedOn":"Sat Mar 12 2022","issuerAuthority1Sign":"https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Hemsworth_Signature.png","issuerAuthority1Name":"RYAN HOLBROOR, RAGGLE INSTRUCTOR","issuerAuthority2Sign":"https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png","issuerAuthority2Name":"ALEXIS COOR, HEAD OF RAGGLE LEARN"}'
    //   };

    //   axios
    //     .request(pick)
    //     .then(function(response) {
    //       console.log(response.data);
    //     })
    //     .catch(function(error) {
    //       console.error(error);
    //     });
    // }

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

//    if (view === "Home"){

// //Verify Certificate

//    if (view === "Home"){

// const choice = {
// method: 'GET',
// url: 'https://certificate-generator1.p.rapidapi.com/verify/a1340ffe-9052-4f45-a613-b7c521a835d9',
// headers: {
//   'X-RapidAPI-Key': '409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81',
//   'X-RapidAPI-Host': 'certificate-generator1.p.rapidapi.com'
// }
// };

// axios.request(choice).then(function (response) {
// console.log(response.data);
// }).catch(function (error) {
// console.error(error);
// });
// }
// //Generate Certificate

//      if (view === "Home"){

// const pick = {
// method: 'POST',
// url: 'https://certificate-generator1.p.rapidapi.com/certi',
// headers: {
//   'content-type': 'application/json',
//   'X-RapidAPI-Key': '409e3b3140msh7f7aa5795f279a1p1df3cajsn95c1e81f3f81',
//   'X-RapidAPI-Host': 'certificate-generator1.p.rapidapi.com'
// },
// data: '{"orgLogo":"https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png","issuedTo":"Shlok Kamleshkumar Patel","type":"COURSE","issuedFor":"Intro to Deep Learning","issuedOn":"Sat Mar 12 2022","issuerAuthority1Sign":"https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Hemsworth_Signature.png","issuerAuthority1Name":"RYAN HOLBROOR, RAGGLE INSTRUCTOR","issuerAuthority2Sign":"https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png","issuerAuthority2Name":"ALEXIS COOR, HEAD OF RAGGLE LEARN"}'
// };

// axios.request(pick).then(function (response) {
// console.log(response.data);
// }).catch(function (error) {
// console.error(error);
// });

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

//sms
