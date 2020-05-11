import { ShopliteImg, InsuranceImg } from "../images/projects";


const Data  = [
    {
        "id": 1,
        "name" : "ShopLite E-commerce",
        "imageUrl": ShopliteImg,
        "description": "An E-commerce web application built to consolidate on what I learnt about React-Redux",
        "accomplishments": [
            { "id": 1, "detail": "A React.js application" },
            { "id": 2, "detail": "state management using React-redux" },
            { "id": 3, "detail": "User Authentication using Firebase" },
            { "id": 4, "detail": "Firebase-firestore for data storage" },
            { "id": 5, "detail": "css-in-js styled component for styling" },
            { "id": 6, "detail": "test-stripe payment for confirming checkout" }
        ],
        "url": "https://shoplite.herokuapp.com/",
        "githubUrl": "https://github.com/silanka007/shoplite",
        "showRear": false
    },
    {
        "id": 2,
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
        ],
        "url": "https://silanka007.github.io/insurance_landing_page/",
        "githubUrl": "https://github.com/silanka007/insurance_landing_page",
        "showRear": false
    }
]

export default Data;