import { facebook, instagram, twitter } from "../assets"
export const NavLink=[
{href:"#hero", name:"Home"},
{href:"#aboutus", name:"About Us"},
{href:"#services", name:"Services"},
{href:"#team", name:"Team"},
{href:"#reservation", name:"Reservation"},
{href:"#review", name:"Review"},
// {href:"#menu", name:"Our Menu"},
]
export const service = [
{img:"https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f8589cd00292a118f540_quality%20food.svg", title: "Quality Food", text:"we sell and serve food of greate quality that satifies the taste of our numerous customers"},
{img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f93205d4f44beee3d81c_Super%20Taste.svg", title: "Great Taste" , text: "if you want to have a tastey meal of your cultural dishes, we've got your coverd with our menu that spams all continent of the world"},
{img:"https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f93cfe9d3c2aa4fffcf5_Fast%20Delivery.svg", title: "Fast Delivery", text: "logistics is an important part of any business, which is why we weren't left of from it, as we try to offer a fast delivery services to our esteem customers"}
]

export const menu = [
    {typeOfFood:"Lunch", food: "BEEF BURGER MEAL", icon:"https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624809b049d8067f38befce8_dimg1-p-500.png", time: "20 - 25 Min"},
    {typeOfFood: "Dinner", food: "ROASTED LAMB RUMP", icon:"https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624809894278007a0fba4ed3_dimg2-p-500.jpeg", time: "45 - 50 Min"},
    {typeOfFood: "Breakfast", food: "PAN SEARED SEA BASS", icon: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/6248096f52abd600b424c4f2_dimg3-p-500.png", time: "35 - 40 Min"},
    {typeOfFood :"Lunch", food: "CITRUS CURED SALMON", icon: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg",img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624809894278007a0fba4ed3_dimg2-p-500.jpeg", time: "10 - 22 Min"},
    {typeOfFood: "Dinner", food: "STUFFED STRAWBERRY",icon: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624808d40fc1ebfa1a8db7e8_img-p-500.png", time: "20 - 25 Min"},
    {typeOfFood: "Dinner", food: "MUSSELS SOUP", icon:"https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/6248085c0f614430c9e3d13d_unsplash_1rCjpJ6GFXw-p-500.png", time: "20 - 25 Min"},
    {typeOfFood: "Dinner", food: "ITALIAN SPAGHETTI", icon: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624808757fb7c9d4cbb00b04_unsplash_gyt0s3wR1YM-p-500.png", time: "20 -25 Min"},
    {typeOfFood: "Dinner", food: "GRILLED FISH", icon: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62480687056b7f14f2e440e8_time.svg", img: "https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/6248088e53c8eb19ead6c157_unsplash_JIjtV1gmfxo-p-500.png", time: "20 -25 Min"},
]

export const secmenu = [
{img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62583016cffb5c9f54bdf814_counterimages.png", noOfRestuarant : "14", place: "Restaurants" , noOfYears: "08", years: "Years Of Experience",noOfChef : "20", chef: "Chef in Kitchen", noOfDishes : "200", dishes:"Food Dishes"}
]
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Dessert", link: "/" },
            { name: "Pasteries", link: "/" },
            { name: "Breakfast", link: "/" },
            { name: "Lunch", link: "/" },
            { name: "Dinner", link: "/" },
            { name: "Brunch", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Foody@customers.com", link: "paris:Foody@customers.com" },
            { name: "+2349061687903", link: "tel:+2349061687903" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const team = [
    {name: "JOHNATHAN TYLER", post: "Founder & Head Chef", img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6258317a26e5048275418045_3avtar.png"},
    {name: "WADE WARREN", post: "Sous Chef", img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6258317a68ebea17bb5cc68c_2avatar.png"},
    {name: "JOHNATHAN TYLER", post: "Line Cooks", img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6258317aff475c62509d1337_4avatar.png"},
    {name: "MICHEAL WALTER" , post: "Prep Cooks", img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6258317b29a58837cd1c4f9c_1avatar.png"}
]
export const review = [
    {img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62481fac6bcbafee22bf0f55_avatar-2.png", text: "Morbi nulla nec dui lacus, in. Libero in pretium metus massa. Sodales dignissim vitae mauris varius faucibus. Eleifend dui, non laoreet ac luctus facilisis diam. Enim scelerisque vel at id viverra tellus.", name: "Jane Cooper", star: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62482127a9ff01c574775888_rate.svg"},
    {img: " https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62481fac821f214026075986_avatar-1.png", text: "Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus.", name: "Esther Howard", star : "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62482127a9ff01c574775888_rate.svg"},
    {img: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62481fac28d1e87aeae77f29_avatar.png", text: "Sit lacus enim enim donec porttitor quis at consequat. Ut ut et erat nunc quisque ut. Ullamcorper in sit lectus nisi, leo diam volutpat vitae. Amet sed sem cursus facilisi amet suscipit.", name: "Guy Hawkins", star: "https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62482127a9ff01c574775888_rate.svg"}
]