import { useQuery, gql } from '@apollo/client';
import { Route, Routes } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile, mobileModel } from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Collection from "./pages/Collection/Collection";
import Incubator from "./pages/Incubator/Incubator";

const GET_LOCATIONS = gql`
query GetLocation {
  collections{
    data{
      id
      attributes{
        title
        description
        favorite
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;


export default function App() {

  //let test = isMobile ? "Mobile" : "Desktop"

  console.log(mobileModel);

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log(data);

  return (
    <div className="wrapper">
      <Header />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>

      <main className="main">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/incubator" element={<Incubator />} />

        </Routes>

      </main>

      <Footer />
    </div>
  )
}

