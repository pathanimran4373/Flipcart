import { spfThree,spfFour,bestSellerFour,} from "../../../assets/images/index";
import { AiFillStar } from "react-icons/ai";
const Products = [
  {
    img: "https://m.media-amazon.com/images/I/81MZRUuHJIL._SL1500_.jpg",
    productName: "Mobile samsung pro",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "35.00",
    company: "samsung",
    color: "white",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1002,
    img: "https://m.media-amazon.com/images/I/81itQPVn-GL._SL1500_.jpg",
    productName: "Redmi 12",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "180.00",
    company: "Banntle",
    color: "Gray",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1003,
    img: "https://m.media-amazon.com/images/I/61LO6l4zB4L._UX522_.jpg",
    productName: "Watch",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "25.00",
    company: "Banntle",
    color: "black",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },

  {
    _id: 1004,
    img: "https://m.media-amazon.com/images/I/71ShBw4g6GL._UL1500_.jpg",
    productName: "Man-shirt",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "220.00",
    company: "Lovis Davin",
    color: "black",
    category: "clothes",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1005,
    img: "https://m.media-amazon.com/images/I/61M0tGMbBPL._SL1200_.jpg",
    productName: "Mobile-Z6 Light",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "35.00",
    company: "Davin",
    color: "black",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1006,
    img: "https://m.media-amazon.com/images/I/71B0o+l+-UL._UL1500_.jpg",
    productName: "Sport Shorts",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "180.00",
    company: "Vans",
    color: "green",
    category: "clothes",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1007,
    img: "https://m.media-amazon.com/images/I/61kLLOgKixL._SL1500_.jpg",
    productName: "Mixer Grinder",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "25.00",
    company: "philips",
    color: "green",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1008,
    img: "https://m.media-amazon.com/images/I/61TOp2ytwwL._SY879_.jpg",
    productName: "Refrigerator",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "220.00",
    company: "samsung",
    color: "black",
    category: "electronics",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1011,
    img: "https://m.media-amazon.com/images/I/810s53kR8tL._UL1500_.jpg",
    productName: "Casual Bag",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "80.00",
    company: "skybag",
    color: "Black",
    category: "other",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1012,
    img: "https://m.media-amazon.com/images/I/51Jlp-dxJEL._SL1100_.jpg",
    productName: "Mixer grander",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "60.00",
    company: "samsung",
    color: "white",
    category: "electronics",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1013,
    img: "https://images.meesho.com/images/products/179415901/4qeq3_512.webp",
    productName: "Bag",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "60.00",
    company: "Skybag",
    color: "red",
    category: "other",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1014,
    img: "https://m.media-amazon.com/images/I/51nUfiMuCLL._UL1000_.jpg",
    productName: "T-shirt Pant",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "250.00",
    company: "Denim",
    color: "blue",
    category: "clothes",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1015,
    img: "https://images.meesho.com/images/products/121005771/l8fvc_512.webp",
    productName: " Water bottle",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "18.00",
    company: "milton",
    category: "other",
    color: "Black",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1016,
    img: "https://images.meesho.com/images/products/225305878/gp26g_512.webp",
    productName: "Wall hanging",
    category: "other",
    price: "250.00",
    color: "white",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1017,
    img: "https://m.media-amazon.com/images/I/81itQPVn-GL._SL1500_.jpg",
    productName: " Mobile Redmi 12",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "12000.00",
    company: "Redmi",
    color: "blue",
    category: "mobile",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1018,
    img: "https://images.meesho.com/images/products/254697454/98tzx_512.webp",
    productName: "Watch",
    price: "44.00",
    company: "fastrak",
    color: "black",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1019,
    img: "https://m.media-amazon.com/images/I/51krmlloEBL._SL1080_.jpg",
    productName: "Lenovo Tab S9",
    price: "250.00",
    company: "Adidas",
    color: "blue",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1020,
    img: "https://m.media-amazon.com/images/I/81Tv57SALWL._UL1500_.jpg",
    productName: "Track Pant",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "80.00",
    company: "Blue tyga",
    color: "black",
    category: "clothes",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1021,
    img: "https://m.media-amazon.com/images/I/71ZvGBfwi+L._UL1500_.jpg",
    productName: "Casual Pants",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "25.00",
    company: "Denim",
    color: "black",
    category: "clothes",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1022,
    img: spfFour,
    productName: "Sun glasses",
    star: <AiFillStar className="rating-star" />,
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1023,
    img: "https://m.media-amazon.com/images/I/81MZRUuHJIL._SL1500_.jpg",
    productName: "Mobile realme-s11",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "35.00",
    company: "Denim",
    color: "blue",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1024,
    img: "https://m.media-amazon.com/images/I/81nj6IlZpVL._UY500_.jpg",
    productName: "Watch",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "35.00",
    company: "Puma",
    color: "white",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1025,
    img: "https://m.media-amazon.com/images/I/81SvInWFWWL._SL1500_.jpg",
    productName: "Realme narzo",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "1280.00",
    company: "realme",
    color: "gray",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1026,
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    category: "mobile",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1027,
    img: "https://m.media-amazon.com/images/I/81bKgIkCjHL._SL1500_.jpg",
    productName: "Water bottele",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "220.00",
    company: "Puma",
    color: "green",
    category: "other",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },


  {
    _id: 1030,
    img: "https://m.media-amazon.com/images/I/71whdzBbJoL._SL1500_.jpg",
    productName: "Asus Laptop",
    price: "25.00",
    color: "Mixed",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1031,
    img: bestSellerFour,
    productName: "Travel Bag",
    price: "220.00",
    color: "Black",
    category: "other",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },

  {
    _id: 1033,
    img: "https://m.media-amazon.com/images/I/61nb1cWMOiL._SL1500_.jpg",
    productName: "water bottele",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "250.00",
    company: "Vans",
    color: "black",
    category: "other",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1034,
    img: "https://m.media-amazon.com/images/I/51W8-7-g58S._SL1500_.jpg",
    productName: "Light bulbs",
    price: "80.00",
    color: "Mixed",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1035,
    img: "https://m.media-amazon.com/images/I/61WmkoakULL._SL1080_.jpg",
    productName: "Philips bulbs",
    price: "60.00",
    color: "Mixed",
    category: "electronics",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1036,
    img: "https://m.media-amazon.com/images/I/51rEPuvNYFL._SL1080_.jpg",
    productName: "Laptop",
    price: "60.00",
    color: "Mixed",
    category: "electronics",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: 1037,
    img: "https://m.media-amazon.com/images/I/61NzmmNu6nL._UL1300_.jpg",
    productName: "Men-Tshirt",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    price: "60.00",
    company: "Nike",
    color: "red",
    category: "clothes",
    badge: false,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },

  {
    _id: 1045,
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    productName: "Xiaomi Tab",
    price: "35.00",
    color: "Blank and White",
    category: "electronics",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];
export default Products;