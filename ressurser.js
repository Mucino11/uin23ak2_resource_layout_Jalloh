const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

// function to display the array

function displayResources() {
    const resourcesContainer = document.getElementById("resources-container");

    resources.forEach(resource => {
        const resourceContainer = document.createElement("div");
        resourceContainer.classList.add("resource-container");
            sourceItem.appendChild(sourceLink);
            sourcesList.appendChild(sourceItem);
        });
        
    };

// Event listener to display the array on click
document.addEventListener("DOMContentLoaded", displayResources);

document.getElementById("html-button").addEventListener("click", function() {
    displayResourceInfo(resources[0]);
});

document.getElementById("css-button").addEventListener("click", function() {
    displayResourceInfo(resources[1]);
});

document.getElementById("javascript-button").addEventListener("click", function() {
    displayResourceInfo(resources[2]);
});

document.getElementById("react-button").addEventListener("click", function() {
    displayResourceInfo(resources[3]);
});

document.getElementById("sanity-button").addEventListener("click", function() {
    displayResourceInfo(resources[4]);
});


// function to create html elements
function displayResourceInfo(resource) {
    
    document.getElementById("resource-info").innerHTML = "";
    
    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = resource.category;
    const textParagraph = document.createElement("p");
    textParagraph.textContent = resource.text;
    const sourcesList = document.createElement("ul");
   
    resource.sources.forEach(source => {
        const sourceItem = document.createElement("li");
        const sourceLink = document.createElement("a");
        sourceLink.textContent = source.title;
        sourceLink.href = source.url;
        sourceItem.appendChild(sourceLink);
        sourcesList.appendChild(sourceItem);
    });
   
    document.getElementById("resource-info").appendChild(categoryHeader);
    document.getElementById("resource-info").appendChild(textParagraph);
    document.getElementById("resource-info").appendChild(sourcesList);
}


