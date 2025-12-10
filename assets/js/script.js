// ================== MAIN JQUERY BLOCK ==================
// ================== PAGE LOAD WITH HAMBARGER ==================
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  // ================== SCROOL +LOAD EVENT HANDLER ==================
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
    // ================== SCROOL RANGE ==================
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
  // ================== SMOOTH SCROOLING ==================
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    let target = $(this).attr("href");
    let navHeight = 80;

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - navHeight,
      },
      500,
      "linear"
    );
  });
  // ================== V - TILI ==================
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
});
// ================== END MAIN JQUERY BLOCK ==================

// ================== TAB TITLE + FAVICON CHANGE ==================
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Hruthik|portfolio";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});
// ================== END TAB TITLE + FAVICON CHANGE ==================

// ================== TYPED.JS TEXT EFFECT ==================
var typed = new Typed(".typing-text", {
  strings: [
    "Frontend developer",
    "Web developer",
    "web designing",
    "Backend developer",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// ================== END TYPED.JS TEXT EFFECT ==================

// ================== (COMMENTED) AUTO JSON SKILLS / PROJECTS ==================
/*
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
      <div class="bar">
        <div class="info">
          <img src=${skill.icon} alt="skill" />
          <span>${skill.name}</span>
        </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    });
  projectsContainer.innerHTML = projectHTML;

  // VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

  // const srtop = ScrollReveal({
  //   origin: "top",
  //   distance: "80px",
  //   duration: 1000,
  //   reset: true,
  // });
  // srtop.reveal(".work .box", { interval: 200 });
}

// fetchData().then((data) => {
//   showSkills(data);
// });

// fetchData("projects").then((data) => {
//   showProjects(data);
// });
*/
// ================== END COMMENTED JSON CODE ==================

// ================== DISABLE SOME DEV SHORTCUTS ==================
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
// ================== END DISABLE SOME DEV SHORTCUTS ==================

// ================== SCROLL REVEAL ANIMATIONS ==================
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

srtop.reveal(".education .box", { interval: 200 });

srtop.reveal(".work .box", { interval: 200 });

srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
// ================== END SCROLL REVEAL ANIMATIONS ==================
