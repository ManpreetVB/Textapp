import React, { useState } from 'react';

function About(props) {
  
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });
  let myStyle={
    color:props.mode === 'dark'?'White':'black',
    backgroundColor:props.mode === 'dark'?'black':'white'
  }

  // const [buttonText, setButtonText] = useState('Enable Dark Mode');

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     });
  //     setButtonText('Enable Light Mode');
  //   } else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     });
  //     setButtonText('Enable Dark Mode');
  //   }
  // };

  return (
    <>
      <div className="container" style={myStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  Welcome to TextUtils, your go-to solution for all your text manipulation needs!

                  At TextUtils, we are passionate about making text processing simple and efficient for everyone. Whether you are a writer, student, programmer, or just someone who needs to tweak some text, our tools are designed to help you with a wide range of text-related tasks. From converting text to uppercase or lowercase, removing extra spaces, checking word count, and even performing basic spell checks, we've got you covered.

                  Our mission is to provide an intuitive and user-friendly platform that empowers you to manage your text effortlessly. We understand that handling text can sometimes be tedious and time-consuming, which is why we strive to create tools that simplify these tasks, saving you time and effort.
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <button
            onClick={toggleStyle}
            type="button"
            className="btn btn-primary my-3"
          >
            {buttonText}
          </button>
        </div> */}
      </div>
    </>
  );
}

export default About;
