export const PoluchitButtonModal = ({ onClose }) => {
    return (
        <div
            onClick={onClose}
            className='fixed inset-0 z-999 flex items-center justify-center bg-black/60'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative w-full max-w-117.5 rounded-lg bg-white px-6 py-10 md:px-20'
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className='absolute right-1 -top-3 text-6xl font-extralight text-[#333]'
                >
                    ×
                </button>

                <h2 className='mb-10 text-center text-[22px] font-medium leading-[120%] text-[#1D1D1B] md:text-[26px]'>
                    Получить коммерческое предложение
                </h2>

                <form className='flex flex-col gap-3'>
                    {/* Name */}
                    <div>
                        <label className='mb-1 block text-sm'>Ваше имя *</label>

                        <input
                            type='text'
                            placeholder='Иван'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 outline-none focus:border-[#FEC80B]'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='mb-1 block text-sm'>E-mail *</label>

                        <input
                            type='email'
                            placeholder='your@mail.com'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 outline-none focus:border-[#FEC80B]'
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className='mb-1 block text-sm'>Телефон *</label>

                        <input
                            type='tel'
                            placeholder='+7'
                            className='w-full rounded-md border-2 border-[#c6c4c4] px-4 py-2 outline-none focus:border-[#FEC80B]'
                        />
                    </div>

                    {/* Checkbox */}
                    <label className='mt-1 flex items-start gap-3'>
                        <input
                            type='checkbox'
                            defaultChecked
                            className='h-7 w-7 accent-black'
                        />

                        <span className='text-sm leading-[120%] text-[#777]'>
                            Я согласен на{" "}
                            <span className='text-[#4B3B65]'>
                                обработку персональных данных
                            </span>
                        </span>
                    </label>

                    {/* Submit */}
                    <button
                        type='submit'
                        className='mt-10 w-full rounded-md bg-[#FEC80B] py-2 font-normal text-black hover:opacity-90 transition'
                    >
                        Получить КП
                    </button>
                </form>
            </div>
        </div>
    );
};
PoluchitButtonModal;
