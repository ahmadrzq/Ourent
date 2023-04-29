import hero1 from "../images/hero/h1.png";
import hero2 from "../images/hero/h2.png";
import hero3 from "../images/hero/h3.png";
import hero4 from "../images/hero/h4.png";
import hero6 from "../images/hero/h6.png";

import list1 from "../images/list/p-1.png";
import list2 from "../images/list/p-2.png";
import list4 from "../images/list/p-4.png";
import list5 from "../images/list/p-5.png";
import list6 from "../images/list/p-6.png";
import list7 from "../images/list/p-7.png";

import city1 from "../images/location/city-1.png";
import city2 from "../images/location/city-2.png";
import city3 from "../images/location/city-3.png";
import city4 from "../images/location/city-4.png";
import city5 from "../images/location/city-5.png";
import city6 from "../images/location/city-6.png";

import team1 from "../images/customer/team-1.jpg"
import team2 from "../images/customer/team-2.jpg"
import team3 from "../images/customer/team-3.jpg"
import team4 from "../images/customer/team-4.jpg"
import team5 from "../images/customer/team-5.jpg"

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
];
export const featured = [
  {
    cover: hero1,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: hero2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: hero3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: hero4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: hero6,
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: list1,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: list2,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: list7,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: list4,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: list5,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: list6,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];
export const awards = [
  {
    icon: <i className="fa-solid fa-trophy"></i>,
    num: "32 M",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city1,
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: city2,
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city3,
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city4,
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city5,
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: city6,
  },
];
export const team = [
  {
    list: "50",
    cover: team1,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: team2,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: team3,
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: team4,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: team5,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: team5,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i className="fab fa-facebook-f"></i>,
      <i className="fab fa-linkedin"></i>,
      <i className="fab fa-twitter"></i>,
      <i className="fab fa-instagram"></i>,
    ],
  },
];
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i className="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i className="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];
