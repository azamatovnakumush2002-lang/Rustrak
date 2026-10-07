import { useEffect, useRef, useState } from "react";
import sliderImage from "../../../public/homePagePhotos/benefits.png";
import lineSvg from "../scrollSlider/line";
import { useLanguage } from "../../context/languageContext";
const ScrollSlider = () => {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const { data } = useLanguage();
    const items = data?.scrollSlider?.linePart || [];
    const activeIndex =
        items.length > 0
            ? Math.min(Math.floor(progress * items.length), items.length - 1)
            : 0;
    const item = items[activeIndex];
    const ItemSvg = lineSvg?.find((svg) => svg.id === item?.id);
    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();
            const newProgress = Math.min(
                Math.max(-rect.top / (rect.height - window.innerHeight), 0),
                1,
            );
            setProgress(newProgress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const positions = [
        { top: "5%", left: "71%" },
        { top: "23%", left: "95%" },
        { top: "44%", left: "103%" },
        { top: "65%", left: "101%" },
        { top: "83%", left: "91.5%" },
    ];

    return (
        <section ref={sectionRef} className='h-[500vh] mt-10'>
            <div className='h-dvh sticky gap-10 top-0 w-full flex flex-col justify-start  min-[890px]:h-dvh min-[890px]:flex-row min-[890px]:items-center min-[890px]:justify-between px-5'>
                <div className='benefits_left w-[45%] min-[890px]:w-[45%] lg:w-[45%] max-[1235px]:w-[45%] xl:w-[40%]'>
                    <div className='relative w-full'>
                        <img
                            className='w-full h-auto hidden min-[890px]:block'
                            src={sliderImage}
                        />
                        <ul className=' min-[890px]:absolute min-[890px]:inset-0 p-5'>
                            {items.map((item, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <li
                                        key={item.id}
                                        className={`min-[890px]:absolute whitespace-nowrap`}
                                        style={{
                                            top: positions[index]?.top,
                                            left: positions[index]?.left,
                                            transform: "translateY(-50%)",
                                        }}
                                    >
                                        <span
                                            className={`before:-left-3.5
before:top-2
before:absolute

before:border-[#fec80b]
before:content-[""]
before:inline-block
before:w-5
before:h-5
before:rounded-full
before:border-2

max-[500px]:before:border
max-[500px]:before:w-3
max-[500px]:before:h-3
max-[500px]:before:-left-3
max-[500px]:ml-2
min-[890px]:before:border-[#fec80b]

min-[500px]:before:-left-5
min-[500px]:before:top-1
min-[500px]:before:w-5
min-[500px]:before:h-5

md:before:-left-5

min-[1024px]:before:-left-7

min-[1190px]:before:-left-6!

min-[1330px]:before:-left-7!

min-[1500px]:before:-left-7.5!

min-[1750px]:before:-left-8.5!

ml-1.5

${isActive ? "before:bg-[#fec80b] min-[890px]:before:bg-[#fec80b]" : "before:bg-white"}
`}
                                        />
                                        <button
                                            className={`max-[500px]:text-[14px] max-[890px]:text-xl min-[890px]:text-[12px]  benefits__button text ${isActive ? "opacity-100" : "opacity-40 "}`}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='w-full flex max-[890px]:flex-col-reverse max-[890px]:gap-1 min-[890px]:w-[30%]'>
                    <div className='relative w-1 h-120 max-[890px]:w-full max-[890px]:h-1 bg-transparent rounded-full overflow-visible'>
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
                            <div className='w-full h-full bg-[#fec80b] rounded-full shadow-[0_0_12px_#fec80b,0_0_24px_rgba(254,200,11,0.4)]' />
                            {progress > 0 && (
                                <div className='absolute right-0 top-5 -translate-y-1/2 translate-x-1/2 pointer-events-none flex items-center justify-center'>
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
                    <div className='flex items-center w-full ml-3'>
                        <div className='w-full flex flex-col items-strecht min-[540]:flex-col gap-5 min-[890px]:flex-col min-[890px]:items-start mb-2'>
                            <div className='mb-3 w-full'>
                                {ItemSvg && <ItemSvg.svg />}
                            </div>
                            <div className='max-[890px]:w-full'>
                                <p className='max-[890px]:text-[15px] w-full'>
                                    {item?.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollSlider;
