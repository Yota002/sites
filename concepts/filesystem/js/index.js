let main = document.getElementById('main');
let category = document.getElementById('category');
let nav = document.getElementById('nav');
let content = document.getElementById('content');
const elements = ["about", "skills", "projects", "work", "education", "certifications", "contacts"];

const pages = {
    main: {
        title: 'Portfolio',
        content: `Portfolio`
    },
    about: {
        title: 'About',
        content: `About`
    },
    skills: {
        title: 'Skills',
        content: `Skills`
    },
    projects: {
        title: 'Projects',
        content: `Projects`
    },
    work: {
        title: 'Work Experience',
        content: `Work Experience`
    },
    education: {
        title: 'Education',
        content: `Education`
    },
    certifications: {
        title: 'Certifications',
        content: `Certifications`
    },
    contacts: {
        title: 'Contacts',
        content: `Contacts`
    },
}

elements.forEach(element => {
    let el = document.getElementById(element);
    el.ondblclick = function () {
        setPage(el);
    }
    // el.onclick = function () {
    //     setPage(el);
    // }
});

category.onclick = function () {
    setPage("main");
}

function setPage(page) {
    if (page == "main") {
        nav.style.display = "block";
        content.style.display = "none";
        category.innerHTML = pages["main"]["title"];
    } else {
        nav.style.display = "none";
        content.style.display = "block";
        content.innerHTML = pages[page.id]["content"];
        category.innerHTML = pages[page.id]["title"];
    }
}