import crumbCoffeeCake from "../assets/crumbCoffeeCake.png";
import newyorkCity from "../assets/newyork.jpg";
import threepillars from "../assets/threepillarsofwellness.jpg";
import egypt from "../assets/egypt.jpg";
import pasta from "../assets/pasta.png";
import eatwell from "../assets/eatWellFeelWell.jpg";
import vieste from "../assets/vieste.jpg";
import chkAndPotato from "../assets/chkAndPotato.jpg";
import wellnessCollage from "../assets/wellnessCollage.jpg";
import spiralPasta from "../assets/spiralPasta.jpg";
import healthyFood from "../assets/healthyFood.jpg";
import bananaOatmeal from "../assets/bananaOatmeal.jpg";
import charcuterieBoard from "../assets/charcuterieBoard.jpg";
import ziplining from "../assets/ziplining.jpg";
import breakfastWithGiraffes from "../assets/kenyaEastAfrica.jpg";
import running from "../assets/running.jpg";
import camel from "../assets/egyptCamel.jpg";
import venice from "../assets/veniceItaly.jpg";
import yoga from "../assets/yogaNearWater.jpg";
import evilElena from "../assets/EvilElena.png";

export const boards = ["Recipes", "Travel", "Wellness/Lifestyle", "Art"];

const pinsData = [
    {
        id: 1,
        title: "Crumb Lover's Coffee Cake",
        description: "Underneath the thick layer of slightly crisp streusel is a tender layer of cake — just thick enough to support the generous amount of topping",
        link: "https://www.kingarthurbaking.com/recipes/crumb-lovers-coffee-cake-recipe",
        board: "Recipes",
        image: crumbCoffeeCake
    },
    {
        id: 2,
        title: "NYC Weekend Getaway",
        description: "Escape to the Big Apple for a weekend of art, culture, and delicious food.",
        link: "https://www.nyctourism.com",
        board: "Travel",
        image: newyorkCity
    },
    {
        id: 3,
        title: "3 Pillars of Wellness",
        description: "Discover the three essential pillars that support a healthy lifestyle.",
        link: "https://therapeuticselfcare.com/the-three-pillars-of-wellness/",
        board: "Wellness/Lifestyle",
        image: threepillars
    },
    {
        id: 4,
        title: "Qena, Egypt",
        description: "Hypostyle Hall of the Temple of Hathor at Dendera, near Quena, Egypt. The temple was built during the Ptolemaic period and is dedicated to the goddess Hathor.",
        link: "https://egypttoursgroup.com/dendera-temple-hathor/",
        board: "Travel",
        image: egypt
    },
    {
        id: 5,
        title: "Tomato Basil Pasta",
        description: "A classic Italian dish with fresh tomatoes and aromatic basil.",
        link: "https://theclevermeal.com/tomato-basil-pasta/",
        board: "Recipes",
        image: pasta
    },
    {
        id: 6,
        title: "Eat Well, Feel Well",
        description: "Discover the connection between nutrition and overall well-being with our comprehensive guide to healthy eating.",
        link: "https://www.eatingwell.com/healthy-reset-11891615",
        board: "Wellness/Lifestyle",
        image: eatwell
    },
    {
        id: 7,
        title: "Vieste, Italy",
        description: "Experience the charm of Vieste, a coastal town in Italy known for its stunning beaches and historic architecture.",
        link: "https://www.beautifulpuglia.com/vieste/",
        board: "Travel",
        image: vieste
    },
    {
        id: 8,
        title: "Chicken and Potato",
        description: "A hearty and delicious one-pan meal that's perfect for a quick dinner.",
        link: "https://www.allrecipes.com/chicken-and-potato-recipes-8421156",
        board: "Recipes",
        image: chkAndPotato
    },
    {
        id: 9,
        title: "Benefits of Eating Healthy",
        description: "Discover the benefits of eating healthy and how it can improve your overall well-being.",
        link: "https://www.cdc.gov/nutrition/php/resources/healthy-eating-benefits-for-adults.html",
        board: "Wellness/Lifestyle",
        image: healthyFood
    },
    {
        id: 10,
        title: "Spiral Pasta",
        description: "A delightful twist on a classic dish, featuring spiraled pasta with a rich, flavorful sauce.",
        link: "https://wholesomepatisserie.com/spiral-pasta-recipes/",
        board: "Recipes",
        image: spiralPasta
    },
    {
        id: 11,
        title: "Egyptian Camel Ride",
        description: "Experience the thrill of riding a camel through the stunning landscapes of Egypt.",
        link: "https://egypttoursgroup.com/camel-ride-egypt-tours-group/",
        board: "Travel",
        image: camel
    },
    {
        id: 12,
        title: "Banana Oatmeal",
        description: "A delicious and nutritious breakfast option that's perfect for starting your day right.",
        link: "",
        board: "Recipes",
        image: bananaOatmeal
    },
    {
        id: 13,
        title: "Charcuterie Board",
        description: "A delightful assortment of cured meats, cheeses, and accompaniments for a sophisticated appetizer.",
        link: "https://picky-palate.com/make-the-perfect-charcuterie-board/",
        board: "Recipes",
        image: charcuterieBoard
    },
    {
        id: 14,
        title: "Ziplining in Costa Rica",
        description: "Experience the thrill of ziplining through the lush forests of Costa Rica.",
        link: "https://www.adventuresbydisney.com/destinations/central-south-america/costa-rica-vacations/",
        board: "Travel",
        image: ziplining
    },
    {
        id: 15,
        title: "Breakfast with Giraffes",
        description: "Enjoy a unique dining experience with giraffes at the Giraffe Manor in Kenya.",
        link: "https://www.thesafaricollection.com/properties/giraffe-manor/",
        board: "Travel",
        image: breakfastWithGiraffes
    },
    {
        id:16,
        title: "Running",
        description: "Discover the benefits of running and how it can improve your physical and mental health.",
        link: "https://www.fleetfeet.com/how-to-start-running",
        board: "Wellness/Lifestyle",
        image: running
    },
    {
        id:17,
        title: "Wellness Collage",
        description: "A collection of wellness tips and tricks to help you live your best life.",
        link: "https://lovelifebefit.com/wellness-tips/",
        board: "Wellness/Lifestyle",
        image: wellnessCollage
    },
    {
        id: 18,
        title: "Venice, Italy",
        description: "Discover the enchanting city of Venice, Italy, with its romantic canals, historic architecture, and vibrant culture.",
        link: "",
        board: "Travel",
        image: venice
    },
    {
        id: 19,
        title: "Yoga on the Water",
        description: "Find tranquility and balance with yoga sessions held near serene bodies of water, offering a peaceful escape from the hustle and bustle of daily life.",
        link: "https://www.yogajournal.com/",
        board: "Wellness/Lifestyle",
        image: yoga
    },
    {
        id: 20,
        title: "Evil Elena",
        description: "A captivating portrait of Evil Elena, showcasing her enigmatic allure and dark charisma.",
        link: "https://www.linkedin.com/in/elena-lucci-78505528a",
        board: "Art",
        image: evilElena
    }

];

export default pinsData;