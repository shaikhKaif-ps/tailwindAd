"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useState } from "react";

import './homeSwipper.css'

const HomeSpotlight = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="parentSpotlight lg:flex lg:h-[700px] mx-auto mt-8">
      <div className="h-[350px] lg:h-full lg:flex-1 flex items-center bg-mainBg text-white">
        <div className="w-[90%] h-full mx-auto flex flex-col justify-around lg:h-[70%] y">
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              nextEl: ".spot-arrow-left",
              prevEl: ".spot-arrow-right",
            }}
            spaceBetween={10}
            slidesPerView={1}
            draggable={false}
            freeMode={true}
            watchSlidesProgress={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={600} // Adjust the speed here (e.g., 1000ms = 1 second)
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            className="mySwiper"
          >

            {/* 1 */}
            <SwiperSlide>
              <div className="flex items-center mb-8 justify-between">
                <h1 className="primary-heading">
                  Transforming <br />
                  Standards <br /> In Hospitality 1
                </h1>
                <div className="md:flex flex-col hidden">
                  <button className="spot-arrow-right">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                      alt=""
                    />
                  </button>
                  <br />
                  <button className="spot-arrow-left">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="md:flex items-center justify-between">
                <p className="globalPara md:flex-1 mb-7">
                  Advent Hotel International is a premier hospitality company
                  with a robust portfolio and a focus on upscale branded assets
                  in key markets.
                </p>
                <div className="md:flex-1 flex justify-between md:justify-end">
                  <button className="bg-slate-500 uppercase h-[50px] text-xs tracking-wide px-4 rounded-full">
                    <span>learn more</span>
                  </button>
                  <div className="md:hidden flex items-center gap-2">
                    <button className="w-[50px] h-[52px] spot-arrow-left">
                      <imga
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                        alt=""
                      />
                    </button>

                    <button className="w-[50px] h-[52px] spot-arrow-right">
                      <img
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            {/* 2 */}
            <SwiperSlide>
            <div className="flex items-center justify-between mb-8">
                <h1 className="primary-heading">
                  Transforming <br />
                  Standards <br /> In Hospitality 2
                </h1>
                <div className="md:flex flex-col hidden">
                  <button className="spot-arrow-right">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                      alt=""
                    />
                  </button>
                  <br />
                  <button className="spot-arrow-left">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="md:flex items-center justify-between">
                <p className="globalPara md:flex-1 mb-7">
                  Advent Hotel International is a premier hospitality company
                  with a robust portfolio and a focus on upscale branded assets
                  in key markets.
                </p>
                <div className="md:flex-1 flex justify-between md:justify-end">
                  <button className="bg-slate-500 uppercase h-[50px] text-xs tracking-wide px-4 rounded-full">
                    <span>learn more</span>
                  </button>
                  <div className="md:hidden flex items-center gap-2">
                    <button className="w-[50px] h-[52px] spot-arrow-left">
                      <imga
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                        alt=""
                      />
                    </button>

                    <button className="w-[50px] h-[52px] spot-arrow-right">
                      <img
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide>
            <div className="flex items-center justify-between mb-8">
                <h1 className="primary-heading">
                  Transforming <br />
                  Standards <br /> In Hospitality 3
                </h1>
                <div className="md:flex flex-col hidden">
                  <button className="spot-arrow-right">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                      alt=""
                    />
                  </button>
                  <br />
                  <button className="spot-arrow-left">
                    <img
                      src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="md:flex items-center justify-between">
                <p className="globalPara md:flex-1 mb-7">
                  Advent Hotel International is a premier hospitality company
                  with a robust portfolio and a focus on upscale branded assets
                  in key markets.
                </p>
                <div className="md:flex-1 flex justify-between md:justify-end">
                  <button className="bg-slate-500 uppercase h-[50px] text-xs tracking-wide px-4 rounded-full">
                    <span>learn more</span>
                  </button>
                  <div className="md:hidden flex items-center gap-2">
                    <button className="w-[50px] h-[52px] spot-arrow-left">
                      <imga
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-left.b3d95f93.svg"
                        alt=""
                      />
                    </button>

                    <button className="w-[50px] h-[52px] spot-arrow-right">
                      <img
                        src="https://phpstack-1034502-4622016.cloudwaysapps.com/_next/static/media/Arrow-right.4e5735cc.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="h-[350px] lg:h-full lg:flex-1 bg-green-300">
        <div className="bg-slate-950">2</div>
      </div>
    </div>
  );
};

export default HomeSpotlight;
