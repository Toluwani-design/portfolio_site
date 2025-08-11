// Easily editable data
const portfolioData = {
    name: "Your Name",
    tagline: "Web Developer | Designer | Creator",
    about: "Hi! I’m a passionate developer who loves creating clean, user-friendly websites.",
    email: "you@example.com",
    projects: [
        { title: "Project One", description: "Description of project one.", link: "#" },
        { title: "Project Two", description: "Description of project two.", link: "#" },
        { title: "Project Three", description: "Description of project three.", link: "#" }
    ]
};

// Fill page with data
document.getElementById("name").textContent = portfolioData.name;
document.getElementById("tagline").textContent = portfolioData.tagline;
document.getElementById("about-text").textContent = portfolioData.about;
document.getElementById("email").textContent = portfolioData.email;

// Load projects
const projectList = document.getElementById("project-list");
portfolioData.projects.forEach(p => {
    const projectEl = document.createElement("div");
    projectEl.className = "project";
    projectEl.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><a href="${p.link}" target="_blank">View</a>`;
    projectList.appendChild(projectEl);
});

// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();
