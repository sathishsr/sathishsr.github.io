import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import cloud from './images/cloud.png'
import mountain from './images/mountain.png'
import sathish from './images/sathish_sr.jpeg'
import chilles from './images/chillies.png'
function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <title>Sathish S R</title>
        <link rel="stylesheet" href="css/styles.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Sacramento"
          rel="stylesheet"
        />
        <link rel="icon" href="favicon.ico" />
      </head>

      <body>
        {/* <div class="top-container">
          <img class="top-cloud" src={cloud} alt="cloud" />
          <div class="title-text">
            <h1>I'm Sathish S R.</h1>
            <h2>a <span class="pro">pro</span>grammer.</h2>
          </div>
          <img class="bottom-cloud" src={cloud} alt="cloud" />
          <img class="mountain" src={mountain} alt="mountain-img" />
        </div> */}

        <div class="middle-container">
          <div class="profile">
            <img src={sathish} alt="sathish-profile-img" class='avatar' />
            <h2>Hello.</h2>
            <p class="intro">
              I am an Android and RN Developer. I am currently working on React
              Native development. I ❤️ programming in different languages.
            </p>
          </div>
          <hr />
          <div class="skills">
            <h2>My Skills.</h2>
            <div class="skill-row">
              <img
                class="code-img"
                src="https://media.giphy.com/media/3p50WGyUqeU5W/giphy.gif"
                alt="code-img"
              />

              <h3>Design & Development</h3>
              <p>
                I started coding for android applications during my college days.
                Over time, I have gained a wealth of experience designing and
                developing mobile and web applications.
              </p>
            </div>
            <div class="skill-row">
              <img
                class="chilli-img"
                src={chilles}
                alt="chillies-img"
              />

              <h3>Coding Challenge</h3>
              <p>
                But my best skill is actually in doing coding challenges in
                HackerEarth. Java and JS are my favorite languages to do challenges.
              </p>
            </div>
          </div>
          <hr />
          <div class="contact-me">
            <h2>Get In Touch</h2>
            <h3>If you love coding as much as I do.</h3>
            <p class="contact-message">
              Love coding as much as I do? Let's talk about how awesome they are!
            </p>
            <a class="btn" href="mailto:sathish.sr24@gmail.com">CONTACT ME</a>
          </div>
        </div>

        <div class="bottom-container">
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/sathish-kumar-sr-12683964/"
          >LinkedIn</a
          >
          <a class="footer-link" href="https://github.com/sathishsr">Github</a>
          <p class="copyright">© 2021 Sathish S R</p>
        </div>
      </body>
    </div>
  );
}

export default App;
