const Loader = () => {
    return (
        <div className='fixed inset-0 z-9999 flex items-center justify-center bg-white'>
            <div className='h-18 w-18 animate-spin rounded-full border-10 border-[#eeeeee] border-t-primary'></div>
        </div>
    );
};
export default Loader;
