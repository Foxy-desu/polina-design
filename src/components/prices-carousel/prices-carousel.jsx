import React from "react";
import {EffectCards, EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import {PlanCard} from "../UI/plan-card/plan-card";
import styles from "./prices-carousel.module.scss";


export const PricesCarousel = ({plans}) => {

    function renderSwipes(plans) {

        return (
            plans.map((plan, i)=> {
                return (
                    <SwiperSlide>
                        <div key={plan.id}
                                     className={styles["plan-wrap"]}
                        >
                            <PlanCard planName={plan.planName} perks={plan.perks} price={plan.price} prevPrice={plan.prevPrice} discount={plan.discount} type={plan.type} shadow={"slight"} path={"/order"}
                            />
                        </div>
                    </SwiperSlide>
                )
            })
        )
    }

    return (
        <div className={styles["swiper-wrap"]}>
            <Swiper effect={'coverflow'}
                    loop={true}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper">
                {renderSwipes(plans)}
            </Swiper>
        </div>

    )
}