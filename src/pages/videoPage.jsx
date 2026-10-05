import Breadcrumb from "../components/breadcrum/breadcrum";
import { useLanguage } from "../context/languageContext";

const VideoPage = () => {
    const { data } = useLanguage();
    return (
        <>
            <div className='mx-auto max-w-360 px-5 mb-10'>
                <Breadcrumb />
                <div className='flex items-center justify-between my-5'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-medium'>
                        {data.videoPage.pageTitle}
                    </h1>
                    <a
                        href='fotogallery'
                        className='hidden lg:block border-2 border-amber-400 py-2 px-7 rounded hover:bg-amber-400 transition duration-300'
                    >
                        {data.videoPage.button}
                    </a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8'>
                    {data.videoPage.videos.map((item) => (
                        <div key={item.id}>
                            <div className='relative aspect-video overflow-hidden'>
                                <iframe
                                    className='w-full h-full'
                                    src={`https://www.youtube.com/embed/${
                                        item.link
                                            .split("youtu.be/")[1]
                                            ?.split("?")[0]
                                    }`}
                                    title={item.name}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                />
                                {/* <iframe
                                    className='w-full h-full'
                                    src={item.link}
                                    title={item.name}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                /> */}
                            </div>
                            <p className='mt-3 text-base lg:text-[18px] font-medium'>
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default VideoPage;
