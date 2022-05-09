import React from 'react';
import "./signup.css";

const signup = () => {


  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function dynInput(rb) {
    if (document.getElementById("raadio").checked == true) {
      var input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Shop Add.";
      input.name = "text-837";
      input.required = "true";
      var i = document.createElement("i");
      i.className = "fas fa-user";
      var x = document.createElement("div");
      x.id = rb.name.id;
      x.className = "input-field";
      x.appendChild(i);
      x.appendChild(input);
      var x2 = document.getElementById("insertinputs");
      insertAfter(x2, x);
    }
    if (document.getElementById("raadio2").checked == true) {
      var input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Shop Add.";
      input.name = "text-837";
      input.required = "true";
      var i = document.createElement("i");
      i.className = "fas fa-user";
      var div = document.createElement("div");
      div.id = rb.name;
      div.className = "input-field";
      div.appendChild(i);
      div.appendChild(input);
      var div2 = document.getElementById("insertinputs");
      insertAfter(div2, div);
    }
    if (document.getElementById("raadio").checked === false) {
      document.getElementById(rb.name.id).remove();
    }
    if (document.getElementById("raadio2").checked === false) {
      document.getElementById(rb.name).remove();
    }
  }

  return (
    <div className="container">
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              We are Helping Farmer to produce there product and 24/7 guildance
              to Farmers
            </p>
            <button className="btn transparent" id="sign-in-btn">Sign in</button>
          </div>
          <img src="../static/img/farmer2.png" className="image" alt="" />
        </div>
      </div>

      <div className="forms-container">
        <div className="signin-signup">
          <form action="/signup" method="POST" className="sign-in-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="user_name" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="user_email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="user_password"
                placeholder="Password"
              />
            </div>
            <div class="radio" id="insertinputs">
              <label for="Radios">
                <input
                  type="radio"
                  name="rb"
                  id="raadio"
                  onchange={dynInput(this)}
                />Farmer
                <input
                  type="radio"
                  name="rb"
                  id="raadio2"
                  onchange={dynInput(this)}
                />Market owner</label
              >
            </div>
            
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default signup;