import { FaGift } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { PiCalendarCheckDuotone, PiFlowerLotusLight, PiForkKnife, PiHandshakeLight, PiPersonSimpleSwimLight, PiWifiHigh } from "react-icons/pi";

export const images1 = [
  {
    id: "1",
    url: "/img/room_suite.jpg",
    title: "Rooms & Suites",
    description:
              "Choose from our diverse selection of beautifully appointed guest rooms and suites, all designed to deliver the perfect blend of comfort and convenience. Relax in spacious layouts, enjoy premium amenities, and unwind in a tranquil setting.",
  },
  {
    id: "2",
    url: "/img/restaurant.jpg",
    title: "Restaurant",
    description:
              "Enjoy a vibrant atmosphere, impeccable serviceName, and a menu that caters to breakfast, lunch, and dinner. Our talented chefs showcase their expertise with innovative dishes prepared using fresh, locally sourced ingredients.",
  },
  {
    id: "3",
    url: "/img/spa.jpg",
    title: "Spa",
    description:
              " Escape the everyday and indulge in a range of pampering treatments at our luxurious spa. Our expert therapists offer massages, facials, and other body treatments to promote relaxation and rejuvenation.",
  },
  {
    id: "4",
    url: "/img/gym.jpg",
    title: "Fitness Center",
    description:
              "Stay active during your stay with access to our state-of-the-art fitness center. Featuring a variety of cardio and weight training equipment, it's the perfect place to maintain your workout routine.",
  },
];

export const images2 = [
  {
    id: "1",
    url: "/img/home/home_1.jpg",
  },
  {
    id: "2",
    url: "/img/home/home_2.jpg",
  },
  {
    id: "3",
    url: "/img/home/home_3.jpg",
  },
  {
    id: "4",
    url: "/img/home/home_4.jpg",
  },
  {
    id: "5",
    url: "/img/home/home_5.jpg",
  },
  {
    id: "6",
    url: "/img/home/home_6.jpg",
  },
  {
    id: "7",
    url: "/img/home/home_7.jpg",
  },
  {
    id: "8",
    url: "/img/home/home_8.jpg",
  },
  {
    id: "9",
    url: "/img/home/home_9.jpg",
  },
];

export const homeCard = [
  {
    img: "/img/home/cozy.jpg",
    title: "Cozy Room",
    description: "Experience ultimate comfort in our cozy rooms, perfect for relaxation and tranquility.",
    icon: <GiNightSleep className="text-6xl text-primary-1" />,
  },
  {
    img: "/img/home/service.jpg",
    title: "Special offer",
    description: "Enjoy exclusive deals and special offers tailored to enhance your stay.",
    icon: <FaGift className="text-6xl text-primary-1" />
  },
];
  
export const serviceNames = [
  { icon: <PiWifiHigh size={56} />, title: "Free Wifi" },
  { icon: <PiCalendarCheckDuotone size={56} />, title: "Easy Booking" },
  { icon: <PiForkKnife size={56} />, title: "Restaurant" },
  { icon: <PiPersonSimpleSwimLight size={56} />, title: "Swimming Pool" },
  { icon: <PiFlowerLotusLight size={56} />, title: "Beauty & Health" },
  { icon: <PiHandshakeLight size={56} />, title: "Help & Support" },
];

export const roomInfo = [
  {
    route: "/rooms/single-bedroom",
    name: "Single bedroom",
    thumbnail: "/img/single_room.jpg",
    imageUrls: [
      "/img/single/1.jpg",
      "/img/single/2.jpg",
      "/img/single/3.jpg",
      "/img/single/4.jpg",
      "/img/single/5.jpg",
    ],
    amenities: ["Air-conditioner", "Wifi, TV, Netflix", "Garden view", "Fitness room", "Breakfast"],
    introduction:
      "A cozy and comfortable space for solo travelers, equipped with all the necessary amenities for a relaxing stay.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "20",
    occupancy: "Two adults",
    beds: "One standard bed",
    bathrooms: "Rain shower, hairdryer",
    price: "300.000",
    rating: 4.5,
  },
  {
    route: "/rooms/double-bedroom",
    name: "Double bedroom",
    thumbnail: "/img/double_room.jpg",
    imageUrls: ["/img/double/1.jpg", "/img/double/2.jpg", "/img/double/3.jpg", "/img/double/4.jpg"],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Fitness room",
      "Breakfast",
      "Double vanities",
    ],
    introduction:
      "Perfect for couples or two guests, this room features a spacious layout with a double bed or twin beds and modern amenities.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "32",
    occupancy: "Up to two adults and two children",
    beds: "Two standard bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "500.000",
    rating: 5,
  },
  {
    route: "/rooms/deluxe-room",
    name: "Deluxe room",
    thumbnail: "/img/deluxe_room.jpg",
    imageUrls: [
      "/img/deluxe/1.jpg",
      "/img/deluxe/2.jpg",
      "/img/deluxe/3.jpg",
      "/img/deluxe/4.jpg",
      "/img/deluxe/5.jpg",
    ],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Ocean view",
      "Fitness room",
      "Breakfast",
      "Double vanities",
      "Private pool",
      "Balcony with nice view",
      "Security safe",
    ],
    introduction:
      "Experience the epitome of luxury in our Deluxe Room, which offers an expansive space adorned with premium furnishings.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "32",
    occupancy: "Two adults",
    beds: "One king bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "800.000",
    rating: 3.5,
  },
  {
    route: "/rooms/family-room",
    name: "Family room",
    thumbnail: "/img/family_room.jpg",
    imageUrls: [
      "/img/family/1.jpg",
      "/img/family/2.jpg",
      "/img/family/3.jpg",
      "/img/family/4.jpg",
      "/img/family/5.jpg",
    ],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Ocean view",
      "Fitness room",
      "Breakfast",
      "Double vanities",
      "Private pool",
    ],
    introduction:
      "Our Family Room is perfect for those traveling with children, providing ample space and thoughtful amenities to ensure a pleasant stay for everyone.  Enjoy additional features like a small kitchenette and a cozy seating area, making it an ideal home away from home for your family.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "42",
    occupancy: "Two adults",
    beds: "One king bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "1.000.000",
    rating: 4.5,
  },
  {
    route: "/rooms/suite",
    name: "Suite",
    thumbnail: "/img/suite.jpg",
    imageUrls: ["/img/suite/1.jpg", "/img/suite/2.jpg", "/img/suite/3.jpg", "/img/suite/4.jpg", "/img/suite/5.jpg"],
    amenities: [
      "Air-conditioner, Heater",
      "Wifi, OLED TV, Netflix",
      "Sofa, working desk",
      "Garden view",
      "Fitness room",
      "Premium breakfast",
      "Private pool",
      "Balcony with nice view",
      "Tea and coffee maker",
    ],
    introduction:
      "Indulge in the ultimate luxury with our spacious Suite, designed for those who appreciate the finer things in life. With panoramic views and sophisticated decor, our Suite offers an unparalleled experience of comfort and style.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "80",
    occupancy: "Up to 6 people",
    beds: "Three king beds",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "2.000.000",
    rating: 3,
  },
  {
    route: "/rooms/penthouse",
    name: "Penthouse",
    thumbnail: "/img/penthouse.jpg",
    imageUrls: [
      "/img/penthouse/1.jpg",
      "/img/penthouse/2.jpg",
      "/img/penthouse/3.jpg",
      "/img/penthouse/4.jpg",
      "/img/penthouse/5.jpg",
    ],
    amenities: [
      "Air-conditioner, Heater",
      "Wifi, 8K OLED TV, Netflix, Spotify",
      "Sofa, working desk",
      "Ocean, garden view",
      "Fitness room",
      "Premium breakfast",
      "Private pool",
      "Balcony with nice view",
      "Tea and coffee maker",
      "Security safe",
      "Soundproof room",
    ],
    introduction:
      "Experience unrivaled luxury in our Penthouse, featuring breathtaking views, exquisite decor, and exceptional amenities for the ultimate in comfort and elegance. Enjoy exclusive privacy and top-tier serviceName in our Penthouse, designed to provide a sophisticated retreat for the discerning traveler.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "120",
    occupancy: "Up to 10 people",
    beds: "Four king beds",
    bathrooms: "Rain shower, separate marble tub, pink hairdryer, music player",
    price: "5.000.000",
    rating: 3.5,
  },
];

export const serviceInfo = [
  {
    url: "/img/spa_1.jpg",
    serviceName: "Spa",
    title: "Relax and chill",
    introduction:
      "Our extensive range of spa treatments, including soothing massages, revitalizing facials, and aromatic therapies, is tailored to meet your unique needs. Escape the hustle and bustle of everyday life and indulge in our tranquil environment, where our skilled therapists are dedicated to enhancing your well-being and restoring your inner balance.",
  },
  {
    url: "/img/restaurant_1.jpg",
    serviceName: "Restaurant",
    title: "Enjoy foods and drinks",
    introduction:
      "Delight your senses with exquisite dining experience at our restaurant. Enjoy a diverse menu featuring gourmet dishes crafted from the freshest ingredients, paired with an exceptional selection of wines and beverages. Whether you're indulging in a hearty breakfast, a leisurely lunch, or an elegant dinner, our culinary team is dedicated to providing a memorable dining experience that combines flavor, ambiance, and impeccable serviceName.",
  },
  {
    url: "/img/gym.jpg",
    serviceName: "Gym",
    title: "Have a healthy life",
    introduction:
      "Elevate your fitness journey in our state-of-the-art gym, designed to help you achieve your health and wellness goals. Our facility features a wide range of modern equipment, from cardio machines to free weights, catering to all fitness levels. Join our dynamic group classes or work with our professional trainers for personalized guidance and support.",
  },
  {
    url: "/img/pet.jpg",
    serviceName: "Pet care",
    title: "We love your pets",
    introduction:
    "Ensure your pets live a healthy and happy life with our comprehensive pet care serviceNames. Our experienced team provides a wide range of serviceNames, including routine check-ups, vaccinations, grooming, and specialized treatments. We are dedicated to delivering the highest quality care for your furry companions, ensuring they receive the attention and love they deserve in a safe and nurturing environment."
  },
];