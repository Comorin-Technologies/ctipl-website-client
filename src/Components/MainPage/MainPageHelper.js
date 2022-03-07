import icon1 from "../../Assets/MainPage/icon1.png";
import icon2 from "../../Assets/MainPage/icon2.png";
import icon3 from "../../Assets/MainPage/icon3.png";
import icon4 from "../../Assets/MainPage/icon4.png";
import icon5 from "../../Assets/MainPage/icon5.png";
import img1 from "../../Assets/MainPage/1HmeImg.jpg";
import img2 from "../../Assets/MainPage/2HmeImg.PNG";
import img3 from "../../Assets/MainPage/3HmeImg.jpg";
import img4 from "../../Assets/MainPage/4HmeImg.jpg";
import img5 from "../../Assets/MainPage/5HmeImg.PNG";
import img6 from "../../Assets/MainPage/6HmeImg.jpg";
import img7 from "../../Assets/MainPage/7HmeImg.jpg";
import img8 from "../../Assets/MainPage/8HmeImg.jpg";
import contactimg1 from "../../Assets/MainPage/contactImg1.jpg";
import axios from "axios";

export const HomeSlideImages = [
  {
    url: img1,
    caption:
      "DELIVERNG THE ENTERPRISE SUPPLY CHAIN AND LOGISTICS SOLUTIONS SINCE 2010",
  },
  {
    url: img2,
    caption: "SUPPLY CHAIN PLANNING",
  },
  {
    url: img3,
    caption: "SUPPLY CHAIN EXECUTION",
  },
  {
    url: img4,
    caption: "SUPPLY CHAIN ANALYTICS",
  },
  {
    url: img5,
    caption: "SUPPLY CHAIN SECURITY",
  },
  {
    url: img6,
    caption: "SUPPLY CHAIN INNOVATION",
  },
  {
    url: img7,
    caption: "ENTERPRISE BLOCKCHAIN",
  },
  {
    url: img8,
    caption: "WAREHOUSE MANAGEMENT SOLUTIONS",
  },
];

export const solutions = [
  {
    icon: icon1,
    solution: "Picking",
  },
  {
    icon: icon2,
    solution: "Packing",
  },
  {
    icon: icon3,
    solution: "Transportation",
  },
  {
    icon: icon4,
    solution: "Tracking",
  },
  {
    icon: icon5,
    solution: "Shipping",
  },
];

export const slidingNum = [
  {
    title: "Customers",
    num: 84,
  },
  {
    title: "Projects",
    num: 100,
  },
  {
    title: "Partners",
    num: 10,
  },
];

export const locations = [
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.323466981902!2d80.20192811236342!3d13.015061629521849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671455555557%3A0xc132a69138b8fdf6!2sOlympia%20Technology%20Park!5e0!3m2!1sen!2sin!4v1645422792627!5m2!1sen!2sin",
    caption: "Comorin Technologies Pvt, Ltd.,",
    captionUnder: "Olympia Tech Park, Chennai, India.",
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.405936168051!2d-74.6140072846698!3d40.3555225793722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e76d8d97f5e3%3A0xd9b7096ce0fff9cd!2sRegus%20-%20New%20Jersey%2C%20Princeton%20-%20Forrestal%20Village!5e0!3m2!1sen!2sin!4v1645430642261!5m2!1sen!2sin",
    caption: "Comorin Technologies LLC.,",
    captionUnder: "Princeton, New Jersey, USA",
  },
];

export const submit = (persondata) => {
  axios.post("http://localhost:9000/", { persondata });
};

export default {
  HomeSlideImages,
  solutions,
  slidingNum,
  locations,
  submit,
};
