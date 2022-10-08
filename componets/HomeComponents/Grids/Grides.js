import React from "react";

function Grides() {
  return (
    <section class="container section scrollspy" id="photos">
      <h3 className="center">Our Sevices</h3>
      <div class="row">
        <div class="col s12 l4">
          <img
            src="/img/unnamed (1).jpg"
            class="responsive-img materialboxed"
            alt=""
          />
        </div>
        <div class="col s12 l6 offset-l1">
          <h2 class="indigo-text text-darken-4"> Portraits</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            reiciendis rerum iste quaerat temporibus expedita deleniti amet
            nulla.{" "}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col s12 l4 push-l7 offset-l1">
          <img
            src="/img/unnamed (2).jpg"
            class="responsive-img materialboxed"
            alt=""
          />
        </div>
        <div class="col s12 l6  pull-l5 right-align ">
          <h2 class="indigo-text text-darken-4 "> Portraits</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            reiciendis rerum iste quaerat temporibus expedita deleniti amet{" "}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col s12 l4">
          <img
            src="/img/three.jpg"
            class="responsive-img materialboxed"
            alt=""
          />
        </div>
        <div class="col s12 l6 offset-l1">
          <h2 class="indigo-text text-darken-4"> Portraits</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            reiciendis rerum iste quaerat temporibus expedita deleniti amet{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Grides;
