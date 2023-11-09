import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { fetchAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import AeroplaneItem from './AeroplaneItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/carousel.css';
import CardLoading from './CardLoading';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const loading = useSelector((state) => state.aeroplanes.loading);
  const error = useSelector((state) => state.aeroplanes.error);

  const { id } = JSON.parse(localStorage.getItem('Token')) || {};

  useEffect(() => {
    dispatch(fetchAeroplanes(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        role="status"
      >
        <CardLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column mb-2 mt-5">
          <h1>Private Airplanes</h1>
          <small className="text-muted"> (Swipe to see more)</small>
        </div>
        {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
          <Swiper
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper mt-5"
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              760: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <SwiperSlide key={aeroplane.id}>
                <AeroplaneItem
                  key={aeroplane.id}
                  aeroplane={aeroplane}
                  classNames={{
                    button: 'btn-slide m-2',
                    aeroplaneBody: '',
                    imageContainer: 'image-container mb-2',
                    image: 'mb-2',
                    title: 'slide-title fw-bold text-uppercase',
                    description: 'slide-description text-muted',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No aeroplanes available.</p>
        )}
      </div>
    </div>
  );
};

export default Aeroplane;
