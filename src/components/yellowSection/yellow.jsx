import {
    animate,
    useMotionValue,
    useTransform,
    motion,
    useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/languageContext";

const YellowSection = () => {
    const { data } = useLanguage();

    function CountMotion({ value, duration = 2.5 }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-50px" });

        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => Math.round(latest));

        useEffect(() => {
            if (isInView) {
                const controls = animate(count, Number(value) || 0, {
                    duration,
                    ease: "easeOut",
                });
                return () => controls.stop();
            }
        }, [isInView, value, duration, count]);
        return <motion.span ref={ref}>{rounded}</motion.span>;
    }

    return (
        <div className=' bg-[#FEC80B]'>
            <div className='mx-auto max-w-360 px-5 py-13 md:flex md:justify-between items-center'>
                {data.homePageYellowSection.yellowInfo.map((card, index) => (
                    <div key={index}>
                        <h3 className='font-medium  text-[70px] sm:text-[100px] leading-[100%] text-[#000000]'>
                            <CountMotion value={card.number} duration={1.5} />
                        </h3>

                        <p className='font-medium text-[32px] leading-[120%] text-[#000000]'>
                            {card.title}
                        </p>
                        <p className='font-normal text-base sm:text-[18px] leading-[150%] text-[#000000] w-full md:max-w-77.5 my-5 md:my-0 line-clamp-4'>
                            {card.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default YellowSection;
