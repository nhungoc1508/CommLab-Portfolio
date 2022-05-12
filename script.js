// Images pre-loading
// Source: https://stackoverflow.com/questions/48987395/check-if-all-the-images-in-the-page-are-loaded
function onImagesLoaded(container, event) {
    var images = container.getElementsByTagName("img");
    var loaded = images.length;
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loaded--;
        }
        else {
            images[i].addEventListener("load", function() {
                loaded--;
                if (loaded == 0) {
                    event();
                }
            });
        }
        if (loaded == 0) {
            event();
        }
    }
}

var container = document.getElementById("img-preload");

onImagesLoaded(container, function() {
    container.classList.add("hidden");
    let loading_screen = document.querySelector("#loading");
    let backdrop = document.querySelector("#backdrop");

    setTimeout(() => {
        loading_screen.style.opacity = 0;
        backdrop.style.opacity = 0;
    }, 2000);

    setTimeout(() => {
        document.body.style.height = '700vh';
        document.body.style.overflow = 'scroll';
        loading_screen.classList.add("hidden");
        backdrop.classList.add("hidden");
    }, 3000);
});

const num_sections = 7;


// The code for all inputs & outputs are the same, I could do with better modularizing ...
let input1 = document.querySelector("#input-1");
let input_len = input1.value.length
// Make the typing cursor appear at the end of the code line
input1.focus();
input1.setSelectionRange(input_len, input_len);

const commands_1 = {
    greetings: 'Hello, world!',
    name: 'Ngoc Hoang',
    country: 'Vietnam',
    class_of: '2023',
    major: 'Computer Science',
    fav_song: 'Amsterdam by Imagine Dragons',
    fav_programming_lang: 'Assembly... jk it\'s Python'
};

const commands_keys = Object.keys(commands_1);

// If the input changes in any way -> change output accordingly
let output1 = document.querySelector("#output-1");
input1.addEventListener("input", (event) => {
    let new_input = input1.value.slice(6).replace(')', '');
    if (!commands_keys.includes(new_input)) {
        output1.style.opacity = '0';
    }
    setTimeout(() => {
        if (commands_keys.includes(new_input)) {
            output1.textContent = "'" + commands_1[new_input] + "'";
            output1.style.opacity = '1';
        } else {
            output1.textContent = "";
        }
    }, 50);
})

let input2 = document.querySelector("#input-2");
let output2 = document.querySelector("#output-2");
input2.addEventListener("input", (event) => {
    let new_input = input2.value.slice(6).replace(')', '');
    if (new_input != "['30MFF', 'Overthinking Cat', 'A Guy Talks For Hours', 'CSI: NYU Abu Dhabi']") {
        output2.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "commlab_assignments") {
            output2.textContent = "['Looking For New York', 'Overthinking Cat', 'A Guy Talks For Hours', 'CSI: NYU Abu Dhabi']";
            output2.style.opacity = '1';
        } else {
            output2.textContent = "";
        }
    }, 50);
})

let input3 = document.querySelector("#input-3");
let output3 = document.querySelector("#output-3");
input3.addEventListener("input", (event) => {
    let new_input = input3.value.slice(6).replace(')', '');
    if (new_input != "assignments[0]") {
        output3.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "assignments[0]") {
            output3.innerHTML = '{name: "Looking For New York", prompt: "30MFF Web Site", url: "<a href="https://nhungoc1508.github.io/30MFF/" target="_blank">click_here</a>"}';
            output3.style.opacity = '1';
        } else {
            output3.textContent = "";
        }
    }, 50);
})

let input4 = document.querySelector("#input-4");
let output4 = document.querySelector("#output-4");
input4.addEventListener("input", (event) => {
    let new_input = input4.value.slice(6).replace(')', '');
    if (new_input != "assignments[1]") {
        output4.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "assignments[1]") {
            output4.innerHTML = '{name: "Overthinking Cat", prompt: "Comix Strip", url: "<a href="https://fyk211.github.io/overthinking_cat/" target="_blank">click_here</a>"}';
            output4.style.opacity = '1';
        } else {
            output4.textContent = "";
        }
    }, 50);
})

let input5 = document.querySelector("#input-5");
let output5 = document.querySelector("#output-5");
input5.addEventListener("input", (event) => {
    let new_input = input5.value.slice(6).replace(')', '');
    if (new_input != "assignments[2]") {
        output5.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "assignments[2]") {
            output5.innerHTML = '{name: "A Guy Talks For Hours", prompt: "Sounds Like", url: "<a href="https://nicholasraffone.github.io/CommLab-Asg3/" target="_blank">click_here</a>"}';
            output5.style.opacity = '1';
        } else {
            output5.textContent = "";
        }
    }, 50);
})

let input6 = document.querySelector("#input-6");
let output6 = document.querySelector("#output-6");
input6.addEventListener("input", (event) => {
    let new_input = input6.value.slice(6).replace(')', '');
    if (new_input != "assignments[3]") {
        output6.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "assignments[3]") {
            output6.innerHTML = '{name: "CSI: NYU Abu Dhabi", prompt: "Vid-e-oh!!!", url: "<a href="https://asgomda.github.io/video-assignment/" target="_blank">click_here</a>"}';
            output6.style.opacity = '1';
        } else {
            output6.textContent = "";
        }
    }, 50);
})

let input7 = document.querySelector("#input-7");
let output7 = document.querySelector("#output-7");
input7.addEventListener("input", (event) => {
    let new_input = input7.value.slice(6).replace(')', '');
    if (new_input != "contacts") {
        output7.style.opacity = '0';
    }
    setTimeout(() => {
        if (new_input == "contacts") {
            output7.innerHTML = '[<a href="https://github.com/nhungoc1508", target="_blank">github</a>, <a href="https://www.linkedin.com/in/ngocnhoang/", target="_blank">linkedin</a>, <a href="mailto:ngoc.hoang@nyu.edu" target="_blank">email</a>]';
            output7.style.opacity = '1';
        } else {
            output7.textContent = "";
        }
    }, 50);
})

// Change the background image + highlighted nav tab on the side nav as the user scrolls
const side_panel = document.querySelector("#side-nav");

window.addEventListener("scroll", function (event) {
    let windowHeightFraction = 1; // 100% if big screen, 70% if smaller (<= 992px)
    if (window.innerWidth <= 992) {
        windowHeightFraction = 0.7;
    } else {
        windowHeightFraction = 1;
    }
    let next_section = Math.round((window.scrollY + 50) / (window.innerHeight * windowHeightFraction));
    let next_section_class = `side-panel-section${next_section + 1}`;
    if (!side_panel.classList.contains(next_section_class)) {
        side_panel.classList.add(next_section_class);
        let nav_link = document.querySelector(`#link-section-${next_section + 1}`);
        if (!nav_link.classList.contains("nav-link-active")) {
            nav_link.classList.add("nav-link-active");
        }
    }
    for (let i = 0; i < num_sections - 1; i++) {
        side_panel.classList.remove(`side-panel-section${(next_section + i + 1) % num_sections + 1}`);
        let nav_link = document.querySelector(`#link-section-${(next_section + i + 1) % num_sections + 1}`);
        nav_link.classList.remove("nav-link-active");
    }
})

// Particles background - p5.js
// Source: https://p5js.org/examples/simulate-particles.html

// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        // this.r = random(1,8);
        this.r = 2;
        this.xSpeed = random(-0.75, 0.75);
        this.ySpeed = random(-0.75, 0.75);
    }

    // creation of a particle.
    createParticle() {
        noStroke();
        fill('rgba(255,255,255,0.15)');
        circle(this.x, this.y, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
        if (this.x < 0 || this.x > width)
            this.xSpeed *= -1;
        if (this.y < 0 || this.y > height)
            this.ySpeed *= -1;
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
        particles.forEach(element => {
            let dis = dist(this.x, this.y, element.x, element.y);
            if (dis < 85) {
                stroke('rgba(255,255,255,0.1)');
                line(this.x, this.y, element.x, element.y);
            }
        });
    }
}

// an array to add multiple particles
let particles = [];

let canvas;
let particles_object = document.querySelector("#particles");

function windowResized() {
    resizeCanvas(particles_object.clientWidth, particles_object.clientHeight);
}

function setup() {
    canvas = createCanvas(particles_object.clientWidth, particles_object.clientHeight);
    canvas.position(0, 0);
    canvas.style("z-index: 2");
    canvas.parent("particles");
    for (let i = 0; i < height / 10; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    for (let i = 0; i < particles.length; i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }
}