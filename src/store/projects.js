import { ShopliteImg } from "../images/projects";


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
    // {
    //     "id": 2,
    //     "name" : "ShopLite E-commerce",
    //     "imageUrl": ShopliteImg,
    //     "description": "",
    //     "accomplishments": [
    //         { "id": 1, "details": "hello" }
    //     ],
    //     "url": "https://shoplite.herokuapp.com/",
    //     "githubUrl": "https://github.com/silanka007/shoplite",
    //     "showRear": false
    // }
]

export default Data;