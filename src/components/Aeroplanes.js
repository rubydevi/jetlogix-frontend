import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import AuthContext from '../context/AuthProvider';
import { fetchAeroplanes } from '../redux/aeroplanes/aeroplanesActions';
import AeroplaneItem from './AeroplaneItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/carousel.css';

const Aeroplane = () => {
  const dispatch = useDispatch();
  const aeroplanesData = useSelector((state) => state.aeroplanes.aeroplanes);
  const loading = useSelector((state) => state.aeroplanes.loading);
  const error = useSelector((state) => state.aeroplanes.error);

  const { id } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchAeroplanes(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
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
        <h1 className="d-flex justify-content-center mb-5">
          Private Airplanes
        </h1>

        {aeroplanesData.aeroplanes && aeroplanesData.aeroplanes.length > 0 ? (
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {aeroplanesData.aeroplanes.map((aeroplane) => (
              <SwiperSlide key={aeroplane.id}>
                <AeroplaneItem
                  key={aeroplane.id}
                  aeroplane={aeroplane}
                  classNames={{
                    button: 'card m-2',
                    aeroplaneBody: '',
                    image: 'card-img-top',
                    title: 'fw-bold text-uppercase',
                    description: 'card-text',
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
