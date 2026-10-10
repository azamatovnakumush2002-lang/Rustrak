import { useEffect, useRef, useState } from "react";
import sliderImage from "../../../public/homePagePhotos/benefits.png";
import lineSvg from "../scrollSlider/line";
import { useLanguage } from "../../context/languageContext";
const ScrollSlider = () => {
    const { data } = useLanguage();
    const scrollSlider = data.scrollSlider.linePart;
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const items = scrollSlider || [];
    const activeIndex = Math.min(
        Math.floor(progress * items.length),
        items.length - 1,
    );
    const item = items[activeIndex];
    const ItemSvg = lineSvg?.find((svg) => svg.id === item?.id);
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const startOffset = window.innerWidth >= 890 ? 100 : 80;
            const totalScrollableDistance = rect.height - window.innerHeight;
            if (totalScrollableDistance <= 0) return;
            const scrolledDistance = -rect.top + startOffset;
            const newProgress = Math.min(
                Math.max(scrolledDistance / totalScrollableDistance, 0),
                1,
            );
            setProgress(newProgress);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);
    const positions = [
        "top-[4%] left-[70%] min-[890px]:left-[67%] min-[680px]:left-[66.5%] max-[600px]:left-[71%] min-[600px]:left-[68%] min-[480px]:left-[65.5%] min-[360px]:left-[67%]",

        "top-[25%] left-[91.5%] min-[600px]:left-[91.5%] max-[600px]:left-[93%] min-[500px]:left-[91.5%]  max-[500px]:left-[92%]",

        "top-[45%] left-[98%] min-[1000px]:left-[97.5%] min-[900px]:left-[98%] min-[850px]:left-[98.5%]  min-[600px]:left-[98%] min-[482px]:left-[98.5%] min-[472px]:left-[98%] min-[380px]:left-[98%]",

        "top-[67%] left-[92.5%] min-[1120px]:left-[95%] min-[1024px]:left-[94%] min-[850px]:left-[95.5%] min-[780px]:left-[95.5%] min-[680px]:left-[95%] min-[600px]:left-[94.5%] min-[550px]:left-[95%] min-[450px]:left-[95.5%] min-[380px]:left-[95%] min-[365px]:left-[95%] max-[365px]:left-[95%]",

        "top-[82%] left-[84%] min-[1200px]:left-[85.5%] min-[1024px]:left-[85%] min-[890px]:left-[85.5%] min-[760px]:left-[86%] min-[600px]:left-[85%] min-[590px]:left-[86%] min-[550px]:left-[85.5%] min-[460px]:left-[86%] min-[414px]:left-[86%] min-[365px]:left-[85%]",
    ];

    return (
        <div className='mx-auto max-w-360 px-5'>
            <section
                ref={sectionRef}
                className='relative max-[889px]:h-[150vh] min-[890px]:h-[250vh] mt-10 md:my-20'
            >
                <div
                    className='
            sticky top-25
            h-[calc(100vh-6.25rem)]
            gap-10 sm:gap-15
            w-full flex flex-col
            min-[890px]:flex-row
            min-[890px]:items-start
            min-[890px]:overflow-hidden
            max-[889px]:static
            max-[889px]:h-auto
            max-[889px]:overflow-visible
        '
                >
                    <div
                        data-aos='flip-down'
                        className='max-[500px]:w-full max-[890px]:w-[83%] w-[60%] max-[890px]:flex max-[890px]:flex-col max-[890px]:justify-center'
                    >
                        <div className='w-1/2 min-[890px]:w-[60%] relative'>
                            <img
                                className='w-full h-auto block'
                                src={sliderImage}
                            />
                            {data.scrollSlider.linePart.map((item, index) => {
                                const isActive = index === activeIndex;
                                const position =
                                    positions[index] || "top-0 left-0";

                                return (
                                    <div
                                        key={item.id || index}
                                        className={`whitespace-nowrap absolute ${position}`}
                                    >
                                        <p className='flex items-center gap-0.5 sm-gap-2'>
                                            <span
                                                className={`inline-block border-[0.5px] w-1.5 h-1.5 min-[450px]:w-1.5 min-[450px]:h-1.5 min-[600px]:w-2.5 min-[600px]:h-2.5 min-[810px[:w-3.5 min-[810px[:h-3.5 lg:w-4 lg:h-4 rounded-full sm:border ${
                                                    isActive
                                                        ? "bg-[#fec80b] border-[#fec80b]"
                                                        : "bg-white border-[#fec80b]"
                                                }`}
                                            ></span>
                                            <span
                                                className={`absolute left-[150%] text-[12px] sm:text-[13px] md:text-[18px] ${isActive ? "text-black" : "opacity-30"}`}
                                            >
                                                {item.name}
                                            </span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        data-aos='flip-down'
                        className=' relative w-full max-[500px]:flex max-[500px]:justify-end! max-[890px]:flex max-[890px]:flex-col max-[890px]:h-auto max-[890px]:justify-start min-[890px]:w-[30%]'
                    >
                        <div className='relative w-0.5 h-120 max-[890px]:w-full max-[890px]:h-1 bg-transparent rounded-full overflow-visible min-[890px]:absolute min-[890px]:left-0 min-[890px]:top-1/2 min-[890px]:-translate-y-1/2'>
                            <div
                                className='absolute inset-0 origin-top rounded-full hidden min-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                                style={{
                                    transform: `scaleY(${progress})`,
                                }}
                            >
                                <div className='w-full h-full bg-[#fec80b] rounded-full shadow-[0_0_12px_#fec80b,0_0_24px_rgba(254,200,11,0.4)]' />
                                {progress > 0 && (
                                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none flex items-center justify-center'>
                                        <span className='absolute -top-1 w-2.5 h-2.5 bg-[#fec80b] rounded-full animate-ping opacity-75 blur-[1px]' />
                                        <svg
                                            className='relative w-6 h-6 fill-[#fec80b] rotate-180 drop-shadow-[0_0_8px_rgba(254,200,11,0.9)] filter brightness-110'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div
                                className='absolute inset-0 origin-left rounded-full hidden max-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                                style={{
                                    transform: `scaleX(${progress})`,
                                }}
                            >
                                <div className='w-full h-full bg-[#fec80b] rounded-full ' />
                                {progress > 0 && (
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none flex items-center justify-center'>
                                        <span className='absolute -left-1 w-2.5 h-2.5 bg-[#fec80b] rounded-full animate-ping opacity-75 blur-[1px]' />
                                        <svg
                                            className='relative w-6 h-6 fill-[#fec80b] rotate-90 drop-shadow-[0_0_8px_rgba(254,200,11,0.9)] filter brightness-110'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center min-[630px]:items-start w-full ml-5 mt-10'>
                            <div className='w-full flex flex-col items-strecht min-[540]:flex-col gap-5 min-[630px]:mb-20 min-[890px]:flex-col min-[890px]:items-start mb-2 min-[700px]:flex-row min-[700px]:items-center'>
                                <div>
                                    {ItemSvg && (
                                        <ItemSvg.svg
                                            className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12
                                        text-[#FEC80B] drop-shadow-[0_2px_3px_rgba(0,0,0,0.08)]
                                        transition-all duration-300 group-hover:text-white
                                        group-hover:drop-shadow-none'
                                        />
                                    )}
                                </div>
                                <div className='max-w-2xl transition-all duration-300 mb-10'>
                                    <p className='text-[12px] sm-[890px]:text-sm w-full font-medium leading-6 tracking-[0.01em]'>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ScrollSlider;
