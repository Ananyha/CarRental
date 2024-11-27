import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper-bundle.min.css'

const App = () => {
  const cars = [
    { id: 1, image: 'https://imgs.search.brave.com/nGA3t6FzquVXDCtKtC82SiZNI5DHzynHcE6sFl-z9as/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzIxLzIwMjNfTGFt/Ym9yZ2hpbmlfUmV2/dWVsdG8uanBn', title: 'Lamborghini Revuelto', price: '$20,000', isFavorite: true },
    { id: 2, image: 'https://imgs.search.brave.com/fHj3y0HFsLsjllac1LQv5dQC05FeMTmPdhlKwxQtIrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnRvcHNwZWVk/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDgv/MTk5NV9tY2xhcmVu/X2YxX2xtXzYtMS5q/cGc', title: 'McLaren F1 LM', price: '$25,000', isFavorite: false },
    { id: 3, image: 'https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.531xw:0.471xh;0.135xw,0.434xh&resize=1200:*', title: 'Ferrari 812 GTS', price: '$30,000', isFavorite: true },
    { id: 4, image: 'https://cdn.motor1.com/images/mgl/PKZQL/s1/1997-toyota-supra-sold-for-176-000-at-auction.jpg', title: 'Toyota Supra', price: '$35,000', isFavorite: false },
  ];

  const recomndcar = [
    { id: 1, image: 'https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fcars%2F1714468708085-blob&w=3840&q=100', title: 'Bugatti Chiron Super Sport', price: '$3,000,000', isFavorite: false },
    { id: 2, image: 'https://www.carscoops.com/wp-content/uploads/2019/10/795455b3-aston-martin-dbs-superleggera-tuning-wheelsandmore-0.jpg', title: 'Aston Martin DBS Superleggera', price: '$250,000', isFavorite: true },
    { id: 3, image: 'https://imgd.aeplcdn.com/1280x720/cw/ec/32073/Chevrolet-Corvette-Exterior-113605.jpg?wm=0', title: 'Chevrolet Corvette ZR1', price: '$120,000', isFavorite: false },
    { id: 4, image: 'https://media.ed.edmunds-media.com/mclaren/720s-spider/2021/oem/2021_mclaren_720s-spider_convertible_base_fq_oem_1_1600.jpg', title: 'McLaren 720S Spider', price: '$300,000', isFavorite: true },
    { id: 5, image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/49376/f8-tributo-exterior-front-view.jpeg', title: 'Ferrari F8 Tributo', price: '$350,000', isFavorite: false },
    { id: 6, image: 'https://imgd-ct.aeplcdn.com/664x415/n/63bjpra_1422362.jpg', title: 'Nissan GT-R', price: '$115,000', isFavorite: false },
    { id: 7, image: 'https://imgd.aeplcdn.com/664x374/cw/ec/23939/Audi-R8-Left-Front-Three-Quarter-75549.jpg', title: 'Audi R8', price: '$170,000', isFavorite: false },
    { id: 8, image: 'https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/30eaf80ceaa3b7a461a21047b172db29a6c3daa6/photos/KPmaLRBq-tODaQuWvuz-(edit).jpg?t=171112817179', title: 'BMW i8 Roadster', price: '$150,000', isFavorite: true },
    { id: 9, image: 'https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg', title: 'Ford Mustang Shelby GT500', price: '$85,000', isFavorite: true },
    { id: 10, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lexus/LC-500h/7043/1676886702173/front-left-side-47.jpg', title: 'Lexus LC 500h', price: '$100,000', isFavorite: false },
    { id: 11, image: 'https://www.slashgear.com/img/gallery/2022-toyota-gr-supra-3-0-review-for-everyday-enthusiasts/l-intro-1667922749.jpg', title: 'Toyota GR Supra', price: '$55,000', isFavorite: false },
    { id: 12, image: 'https://editorial.pxcrush.net/carsales/general/editorial/maserati-granturismo-trofeo-rosso-granturismo-12.jpg?width=1024&height=682', title: 'Maserati GranTurismo', price: '$120,000', isFavorite: true },
    { id: 13, image: 'https://robbreport.com/wp-content/uploads/2019/03/amg-1.jpg', title: 'Mercedes-AMG GT', price: '$140,000', isFavorite: false },
    { id: 14, image: 'https://www.forbes.com.au/wp-content/uploads/2024/06/1.png', title: 'Ferrari 296 GTS', price: '$350,000', isFavorite: false },
    { id: 15, image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/09/Alfa-Romeo-Quadrifoglio.jpg', title: 'Alfa Romeo Giulia Quadrifoglio', price: '$80,000', isFavorite: false },
    { id: 16, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-turbo-103-6685660839a1f.jpg?crop=0.421xw:0.316xh;0.434xw,0.361xh&resize=1200:*', title: 'Porsche 911 Turbo S', price: '$140,000', isFavorite: true },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <SearchBox />
      <Section title="Popular Cars" cars={cars} />
      <Section title="Recommended Cars" cars={recomndcar}/>
      <Footer />
    </div>
  );
};

export default App;

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-gray-100">
    <div className="text-xl font-bold text-gray-700">
      CarRental
    </div>
    <input
      type="text"
      placeholder="Search"
      className="px-4 py-2 border rounded-full max-w-sm w-full"
    />


    <div className="flex gap-4"><div className="flex gap-4">
      <button className="text-gray-500 border border-gray-300 rounded-full p-3 hover:bg-gray-100">
        ❤️
      </button>
      <button className="text-gray-500 border border-gray-300 rounded-full p-3 hover:bg-gray-100">
        ⚙️
      </button>
      <button className="text-gray-500 border border-gray-300 rounded-full p-3 hover:bg-gray-100">
        👤
      </button>
    </div>

    </div>
  </header>
);

const SearchBox = () => {
  // State to store the selected values
  const [pickupData, setPickupData] = useState({
    location: "Bangalore",
    date: "27-11-24",
    time: "8:00 AM",
  });

  const [dropoffData, setDropoffData] = useState({
    location: "Mumbai",
    date: "28-11-24",
    time: "10:00 AM",
  });

  const handleSwitch = () => {
    setPickupData(dropoffData);
    setDropoffData(pickupData);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 w-full">
      {/* Pick-Up Box */}
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="radio"
            name="pickup"
            className="mr-2 accent-blue-600 glow"
            defaultChecked
          />
          <label className="font-semibold text-blue-600">Pick-Up</label>
        </div>

        {/* Location, Date, and Time Fields */}
        <div className="flex gap-8 w-full">
          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Locations</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={pickupData.location}
              onChange={(e) =>
                setPickupData({ ...pickupData, location: e.target.value })
              }
            >
              <option>Bangalore</option>
              <option>New Delhi</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Kolkata</option>
              <option>Hydrabad</option>
            </select>
          </div>

          <div className="border-l-2 border-gray-300 mx-4"></div>

          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Date</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={pickupData.date}
              onChange={(e) =>
                setPickupData({ ...pickupData, date: e.target.value })
              }
            >
              <option>27-11-24</option>
              <option>28-11-24</option>
              <option>29-11-24</option>
              <option>30-11-24</option>
            </select>
          </div>

          <div className="border-l-2 border-gray-300 mx-4"></div>

          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Time</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={pickupData.time}
              onChange={(e) =>
                setPickupData({ ...pickupData, time: e.target.value })
              }
            >
              <option>8:00 AM</option>
              <option>10:00 PM</option>
              <option>12:00 PM</option>
              <option>2:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Switch Button */}
      <button
        onClick={handleSwitch}
        className="glow flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        ⇄
      </button>

      {/* Drop-Off Box */}
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="radio"
            name="dropoff"
            className="mr-2 accent-blue-600 glow"
            defaultChecked
          />
          <label className="font-semibold text-blue-600">Drop-Off</label>
        </div>
        <div className="flex gap-8 w-full">
          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Locations</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={dropoffData.location}
              onChange={(e) =>
                setDropoffData({ ...dropoffData, location: e.target.value })
              }
            >
              <option>Bangalore</option>
              <option>New Delhi</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Kolkata</option>
              <option>Hydrabad</option>
            </select>
          </div>

          <div className="border-l-2 border-gray-300 mx-4"></div>

          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Date</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={dropoffData.date}
              onChange={(e) =>
                setDropoffData({ ...dropoffData, date: e.target.value })
              }
            >
              <option>27-11-24</option>
              <option>28-11-24</option>
              <option>29-11-24</option>
              <option>30-11-24</option>
            </select>
          </div>

          <div className="border-l-2 border-gray-300 mx-4"></div>

          <div className="flex flex-col w-1/4">
            <label className="font-semibold text-gray-700 block">Time</label>
            <select
              className="rounded p-2 text-gray-400 w-full"
              value={dropoffData.time}
              onChange={(e) =>
                setDropoffData({ ...dropoffData, time: e.target.value })
              }
            >
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>2:00 PM</option>
              <option>4:00 PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarCard = ({ image, title, price, isFavorite }) => (
  <div className="bg-white border rounded-lg shadow-md w-120 h-80 relative overflow-hidden">
    {/* Image with absolute positioning for details */}
    <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />

    {/* Details section */}
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-t-lg">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white text-sm">{price}</p>

      {/* Favorite button */}
      <div className="flex justify-between items-center mt-2">
        <button className="text-xl">
          {isFavorite ? (
            <span className="text-red-500">❤️</span> // Filled red heart
          ) : (
            <span className="text-gray-300">🤍</span> // Outline heart (white)
          )}
        </button>

        {/* View Details button */}
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg ml-2">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 CarRental. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

const Section = ({ title, cars }) => (
  <div className="py-4 px-4">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-4 gap-4"> {/* Use CSS Grid to create 4 columns */}
      {cars.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  </div>
);
