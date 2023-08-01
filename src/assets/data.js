import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

export const product = [
  {
    _id: "7984734rbh3h2hbh",
    brand: "Nike",
    name: "Foundations Matte Flip Flop",
    description:
      "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
    content:
      "Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio",
    amount: 0,
    images: [
      {
        caption: "image1",
        image:
          "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image2",
        image:
          "https://img.freepik.com/premium-photo/white-sneakers-isolated-white-background_943087-1255.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image3",
        image:
          "https://img.freepik.com/premium-photo/pair-textile-blue-sneakers-with-laces-levitate-yellow-background-shoes-sports-jogging_116441-20890.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image4",
        image:
          "https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image5",
        image:
          "https://img.freepik.com/free-vector/shoes-realistic-set_1284-23172.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.2.1830631918.1682933067&semt=sph",
      },
      {
        caption: "image6",
        image:
          "https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?size=626&ext=jpg&uid=R101223355&ga=GA1.1.1830631918.1682933067&semt=sph",
      },
    ],
    categories: "Shoes",
    colors: [
      "red",
      "blue",
      "yellow",
      "white",
      "gray",
      "pink",
      "black",
      "red",
      "blue",
      "yellow",
      "white",
    ],
    sizes: [9, 10, 10.5, 11, 11.5, 12, 12.5, 13, 11.5, 12, 12.5, 13],
    tags: ["Ocassion", "Weeding", "Celebrity"],
    gender: ["Men,Kids"],
    saleLabel: "Weekday Sale",
    newLabel: "Brand New Arrival",
    regularPrice: 9000,
    salePrice: 87000,
    isTaxIncludedInPrice: false,
    tax: 0,
    discount: 10,
    checked: false,
  },
];

export const ProductCategory = [
  {
    title: "Clothing",
    lists: [
      {
        value: "Shirts",
        name: "Shirts",
      },
      {
        value: "TShirts",
        name: "T-Shirts",
      },
      {
        value: "Jeans",
        name: "Jeans",
      },
      {
        value: "Leather",
        name: "Leather",
      },
      {
        value: "Accessories",
        name: "Accessories",
      },
    ],
  },
  {
    title: "Tailored",
    lists: [
      {
        value: "Suits",
        name: "Suits",
      },
      {
        value: "Blazers",
        name: "Blazers",
      },
      {
        value: "Jeans",
        name: "Jeans",
      },
      {
        value: "Apparel",
        name: "Apparel",
      },
      {
        value: "Accessories",
        name: "Accessories",
      },
    ],
  },
];
export const allColors = [
  "Red",
  "Blue",
  "Cyan",
  "Green",
  "Yellow",
  "Violet",
  "Black",
  "White",
  "Bergendi",
];

export const productSizes = [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13];

export const productTags = [
  { name: "Fasion", value: "Fasion" },
  { name: "Ocassion", value: "Occassion" },
  { name: "Weekend", value: "Weekend" },
  { name: "Dinner", value: "Dinner" },
  { name: "Ceremony", value: "Ceremony" },
  { name: "Festival", value: "Festival" },
  { name: "Night Out", value: "Night Out" },
];
export const navLinks = [
  {
    title: "Dashboard",
    menu: [
      {
        name: "General",
        icon: <SummarizeOutlinedIcon />,
        menulist: [""],
      },
    ],
  },
  {
    title: "Managment",
    menu: [
      {
        name: "Product",
        icon: <InventoryOutlinedIcon />,
        menulist: ["List", "Create"],
      },
      {
        name: "Users ",
        icon: <PersonAddAltOutlinedIcon />,
        menulist: ["List", "Create"],
      },
      {
        name: "Shop ",
        icon: <StoreMallDirectoryOutlinedIcon />,
        menulist: ["List", "Create"],
      },
      {
        name: "Permission",
        icon: <ShieldOutlinedIcon />,
        menulist: ["List", "Create"],
      },
    ],
  },
  {
    title: "Sales",
    menu: [
      {
        name: "Sales",
        icon: <SellOutlinedIcon />,
        menulist: ["List", "Detail", "Create", "Edit"],
      },
    ],
  },
];
