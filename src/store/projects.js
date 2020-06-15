import { ShopliteImg, InsuranceImg, DevProfiler, HFinder } from "../images/projects";


const Data  = [
    {
        "id": 1,
        "name" : "DevProfiler",
        "imageUrl": DevProfiler,
        "description": "A social media platform for developers, featuring read, create, update, delete, like and unlike functionalities",
        "accomplishments": [
            { "id": 1, "detail": "A MERN application" },
            { "id": 2, "detail": "state management using React-redux" },
            { "id": 3, "detail": "MongoDb for data storage" },
            { "id": 4, "detail": "React function components and hooks" },
            { "id": 5, "detail": "App deployed to heroku" },
        ],
        "url": "https://devprofiler.herokuapp.com/",
        "githubUrl": "https://github.com/silanka007/devProfiler",
        "showRear": false
    },
    {
        "id": 2,
        "name" : "ShopLite E-commerce",
        "imageUrl": ShopliteImg,
        "description": "An E-commerce web application built to consolidate on what I learnt about React-Redux",
        "accomplishments": [
            { "id": 1, "detail": "A React.js application" },
            { "id": 2, "detail": "state management using React-redux" },
            { "id": 3, "detail": "User Authentication using Firebase" },
            { "id": 4, "detail": "Firebase-firestore for data storage" },
            { "id": 5, "detail": "css-in-js styled component for styling" },
            { "id": 6, "detail": "test-stripe payment for confirming checkout" },
            { "id": 7, "detail": "App deployed to heroku" },
        ],
        "url": "https://shoplite.herokuapp.com/",
        "githubUrl": "https://github.com/silanka007/shoplite",
        "showRear": false
    },
    {
        "id": 3,
        "name" : "Hospital Finder",
        "imageUrl": HFinder,
        "description": "A simple app that takes in a search query of location and geofencing radius. it finds the provided location in the map while restricting the search result to the provided radius.",
        "accomplishments": [
            { "id": 1, "detail": "Project was built with React.Js and Typescript" },
            { "id": 2, "detail": "Strict Typing with typescript" },
            { "id": 3, "detail": "Google Maps API and Place API for place search" },
            // { "id": 4, "detail": "Firebase-firestore for data storage" },
            // { "id": 5, "detail": "css-in-js styled component for styling" },
            { "id": 5, "detail": "App deployed to Netlify" },
        ],
        "url": "https://stupefied-stonebraker-0fb12c.netlify.app/",
        "githubUrl": "https://github.com/silanka007/hospital-finder",
        "showRear": false
    },
    {
        "id": 4,
        "name" : "Insurance - Landing Page",
        "imageUrl": InsuranceImg,
        "description": "A simple landing page for insurance company. It is a reaction to a challenge posted on frontend mentors. An easier way to exercise over the weekends.",
        "accomplishments": [
            { "id": 1, "detail": "A Frontend application" },
            { "id": 2, "detail": "No Javascript web design" },
            { "id": 3, "detail": "User interactions handled with CSS pseudoclasses" },
            // { "id": 4, "detail": "Firebase-firestore for data storage" },
            // { "id": 5, "detail": "css-in-js styled component for styling" },
            // { "id": 6, "detail": "test-stripe payment for confirming checkout" }
            { "id": 5, "detail": "App deployed to github-pages" },
        ],
        "url": "https://silanka007.github.io/insurance_landing_page/",
        "githubUrl": "https://github.com/silanka007/insurance_landing_page",
        "showRear": false
    }
]

export default Data;