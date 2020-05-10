import {
    BootstrapImg,
    CssImg,
    GithubImg,
    GulpImg,
    HerokuImg,
    Html5Img,
    JsImg,
    JsxImg,
    // MaterializeImg,
    MongoDbImg,
    NodeImg,
    JinjaImg,
    EjsImg,
    PostgreImg,
    ReactImg,
    SassImg,
    WebPackImg, 
    //  PythonImg,
    FlaskImg,
} from "../images/skill-logo";

const skillSets = {
    "HTML": [
        { id:1, imgUrl:Html5Img, caption: "HTML5", alt:""},
        { id:2, imgUrl:JsxImg, caption: "JSX", alt:""},
        { id:3, imgUrl:JinjaImg, caption: "Jinja", alt:""},
        { id:4, imgUrl:EjsImg, caption: "EJS", alt:""}
    ],
    "CSS":[
        { id:5, imgUrl:CssImg, caption: "CSS3", alt:""},
        { id:6, imgUrl:SassImg, caption: "Sass", alt:""},
        { id:7, imgUrl:BootstrapImg, caption: "BootStrap", alt:""},
    ],
    "FRONT-END":[
        { id:8, imgUrl:JsImg, caption: "JavaScript", alt:""},
        { id:9, imgUrl:ReactImg, caption: "ReactJs", alt:""},
        // { id:10, imgUrl:BootstrapImg, caption: "Sass", alt:""},
    ],
    "BACK-END":[
        { id:11, imgUrl:NodeImg, caption: "NodeJs", alt:""},
        // { id:12, imgUrl:PythonImg, caption: "Python", alt:""},
        { id:13, imgUrl:FlaskImg, caption: "Flask", alt:""},
        { id:14, imgUrl:MongoDbImg, caption: "MongoDB", alt:""},
        { id:15, imgUrl:PostgreImg, caption: "PostgreSql", alt:""},
    ],
    "OTHERS":[
        { id:16, imgUrl:GithubImg, caption: "GIT & GitHub", alt:""},
        { id:17, imgUrl:HerokuImg, caption: "Heroku", alt:""},
        { id:18, imgUrl:WebPackImg, caption: "WebPack", alt:""},
        { id:19, imgUrl:GulpImg, caption: "Gulp", alt:""},
        // { id:20, imgUrl:PostgreImg, caption: "PostgreSql", alt:""},
    ]
}

export default skillSets;