/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(`#btn`).addEventListener("click", () => {
    document.querySelector(`#excuse`).innerHTML = generateExcuse();
  });
  console.log("Generate new excuse");

  // Funcion general excusa

  let generateExcuse = () => {
    // Arrays
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    // Randomizar Arrays
    let randomwho = Math.floor(Math.random() * who.length);
    let randomaction = Math.floor(Math.random() * action.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhen = Math.floor(Math.random() * when.length);

    // Concatenacion
    return (
      who[randomwho] +
      " " +
      action[randomaction] +
      " " +
      what[randomwhat] +
      " " +
      when[randomwhen]
    );
  };
};
