import './App.css';
import insta from './insta.png';
import github from './github.png';
import linkedin from './linkedin.png';
import img from './photo.png';
import about from './about.gif';
import skills from './skills.gif';
import work1 from './work1.jpg';
import work2 from './work2.png';
import work3 from './work3.png';
import work4 from './work4.gif';
import work5 from './work5.png';
import work6 from './work6.gif';
import PreLoader from './component/PreLoader';

function App() {
  return (
    <>
    <PreLoader />
  <div>  
    <div>
      <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#home" class="nav__logo">Pradeep P</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Projects</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>

                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

    </div>
    <div>
      <main class="l-main">
        <section class="home bd-grid" id='nav-toggle'>
          <div class="home__data">
            <h1 class="home__title">Hi, <br/>I'am <span class="home__title-color">Pradeep</span><br/> Full Stack Developer</h1>
              <a href="https://wa.me/qr/JZ34V63TWDDYB1" class="button" target='_blank' rel='noreferrer'>Contact</a>
              <br/>
              <br/>
              <a href="https://drive.google.com/file/d/1Tgsg3o5gpdfxktoNwh_ViZn8vbgMxK15/view?usp=sharing" target="_blank" rel='noreferrer'  class="button">Resume</a>
          </div>
          <div class="home__social">
              <a href="https://www.linkedin.com/in/pradeep-p-b10799245" target="_blank" rel='noreferrer' class="home__social-icon"><img src={linkedin} alt="img"/></a>
              <a href="https://github.com/HYPERTEXTCODE" target="_blank" rel="noreferrer" class="home__social-icon"><img src={github} alt="img"/></a>
              <a href="https://instagram.com/itz_pradeep_aadhi?igshid=YmMyMTA2M2Y=" target="_blank" rel='noreferrer' class="home__social-icon"><img src={insta} alt="img"/></a>
          </div>
          <div class="home__img">
            <svg class="home__blob" viewBox="0 0 479 467" href='http://www.w3.org/2000/svg' xlinkHref='http://www.w3.org/1999/xlink'>
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                <image class="home__blob-img" x="50" y="60" href={img}/>
              </g>
            </svg>
          </div>
        </section>
        <section class="about section " id="about">
          <h2 class="section-title">About</h2>
          <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src={about} alt="" />
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Pradeep</h2>
                        <p class="about__text">I am a talented, ambitious and hardworking individual, with broad skills and experience in web designing and web development, social media and leading projects.
                            Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                            
                            A key strength is communication; building strong relationships with people in order to deliver the best results.
                            
                            Recently, I am persuing my 3rd year Computer Science And Engineering in Bannari Amman Institute of Technology, I've worked in various projects in my college.</p>           
                    </div>                                   
                </div>
        </section>
        <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div class="skills__img">
                        <img src={skills} alt="" />
                    </div>
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text"><b>TEAM MANAGEMENT:</b></p> 
                            <p class="skills__text">  Experience in managing a team with maximum of 10 members</p>
                            <p><b>PROGRAMMING SKILLS</b></p> 
                            <p>1. C/C++</p>
                            <p>2. HTML</p>
                            <p>3. CSS</p>
                            <p>4. Javascript</p>
                            <p>5. React Js</p>
                        <br/>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-c skills__icon'></i>
                                <span class="skills__name">C/C++</span>
                            </div>
                            <div class="skills__bar skills__c">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon'></i>
                                <span class="skills__name">UX/UI</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="work section" id="work">
                <h2 class="section-title">Projects</h2>

                <div class="work__container bd-grid">
                    <a href="https://github.com/HYPERTEXTCODE/SA-MP-Virtual-Life-Gamemode" target="_blank" rel='noreferrer' class="work__img">
                        <img src={work1} alt=""/>
                    </a>
                    <a href="https://github.com/HYPERTEXTCODE/Multi-Vendor-E-Commerce-Application" target="_blank" rel='noreferrer' class="work__img">
                        <img src={work2} alt=""/>
                    </a>
                    <a href="https://github.com/HYPERTEXTCODE/Event-Management-System" target="_blank" rel='noreferrer' class="work__img">
                        <img src={work3} alt=""/>
                    </a>
                    <a href="link" class="work__img">
                        <img src={work4} alt=""/>
                    </a>
                    <a href="https://github.com/HYPERTEXTCODE/Expense-Tracker---React" target="_blank" rel='noreferrer' class="work__img">
                        <img src={work5} alt=""/>
                    </a>
                    <a href="link" class="work__img">
                        <img src={work6} alt=""/>
                    </a>
                </div>
            </section>
            <section class="footer">
                <p class="footer__title">
                    Social Media
                </p>
                <div class="center">
                <a href="https://instagram.com/itz_pradeep_aadhi?igshid=YmMyMTA2M2Y=" target="_blank" rel='noreferrer' class="home__social-icon"><img src={insta} alt="" class="footer__icon"/></a> 
                </div>
                <br/>
                <div class="footer__copy">
                    <p>This site is developed by Pradeep P 😍</p>
                </div>
            </section>
      </main>
    </div>
  </div>
  </>
  );
}



export default App;
