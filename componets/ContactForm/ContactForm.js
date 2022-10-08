import React from "react";

function ContactForm() {
  return (
    <section class="section  container scrollspy" id="contact">
      <div class="row">
        <div class="col s12 l5">
          <h2 class="indigo-text text-darken-4">Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ut
            atque modi quibusdam culpa error!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ut
            atque modi quibusdam culpa error!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ut
            atque modi quibusdam culpa error!
          </p>
        </div>
        <div class="col s12 l5 offset-l2 z-depth-0">
          <form action="">
            <div class="input-field">
              <i class="material-icons  prefix">email</i>
              <input type="email" name="" id="email" />
              <label for="email"> Your Email</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">message</i>
              <textarea
                class="materialize-textarea"
                name="message"
                id=""
              ></textarea>
              <label for="message"> message</label>
            </div>

            <div class="input-field">
              <i class="material-icons prefix"></i>
              <input type="text" name="" id="date" class="datepicker" />
              <label for="date"> Date</label>
            </div>
            <div class="input-field">
              <p> service reqiured</p>
              <p>
                <label>
                  <input type="checkbox" name="" id="" />
                  <span> photography</span>
                </label>
              </p>

              <p>
                <label>
                  <input type="checkbox" name="" id="" />
                  <span> Editing</span>
                </label>
              </p>
            </div>
            <div class="input-field center">
              <button class="btn indigo darken-3 white-text"> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
