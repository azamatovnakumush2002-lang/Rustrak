import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useLanguage } from "../../context/languageContext";

const QuestionsSection = () => {
    const { data } = useLanguage();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [phoneHovered, setPhoneHovered] = useState(false);

    const send = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = true;
        }

        if (phone.replace(/\D/g, "").length !== 12) {
            newErrors.phone = true;
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setName("");
        setPhone("");
        setErrors({});
    };
    return (
        <section className='bg-[#F2F2F2]  overflow-hidden pt-5'>
            <div className=' max-w-360 pl-5 mx-auto  min-[1099px]:flex justify-between '>
                <div className='w-full lg:w-[65%] my-auto max-[1099px]:mb-8'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-[26px] sm:text-[34px] md:text-[50px] font-medium'>
                            {data.modals.question}
                        </h1>
                        <p className='text-base sm:text-[18px] mb-5'>
                            {data.modals.questionText}
                        </p>
                    </div>
                    <div className=''>
                        <form
                            onSubmit={send}
                            className='md:flex md:items-start gap-5 mx-auto w-full md:mx-0'
                        >
                            <div className='flex flex-col gap-1 w-full'>
                                <label
                                    htmlFor='name'
                                    className='text-[14px] leading-5 text-black'
                                >
                                    {data.modals.name} *
                                </label>

                                <input
                                    id='name'
                                    type='text'
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (e.target.value.trim()) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                name: false,
                                            }));
                                        }
                                    }}
                                    placeholder='Иван'
                                    className={`h-11 w-full rounded border px-4 text-base outline-none ${
                                        errors.name
                                            ? "border-amber-400"
                                            : "border-black"
                                    }`}
                                />

                                <div className='min-h-5'>
                                    {errors.name && (
                                        <p className='text-amber-500 text-xs'>
                                            {data.modals.required}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='flex flex-col gap-1 my-5 md:my-0 w-full'>
                                <label
                                    htmlFor='phone'
                                    className='text-[14px] leading-5 text-black text-left'
                                >
                                    {data.modals.phone} *
                                </label>

                                <IMaskInput
                                    id='phone'
                                    mask='+{998} (00) 000-00-00'
                                    value={phone}
                                    unmask={false}
                                    onAccept={(value) => {
                                        setPhone(value);

                                        if (
                                            value.replace(/\D/g, "").length ===
                                            12
                                        ) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                phone: false,
                                            }));
                                        }
                                    }}
                                    onFocus={() => setPhoneFocused(true)}
                                    onBlur={() => setPhoneFocused(false)}
                                    onMouseEnter={() => setPhoneHovered(true)}
                                    onMouseLeave={() => setPhoneHovered(false)}
                                    placeholder='+998 (__) ___-__-__'
                                    inputMode='numeric'
                                    className={`h-11 w-full rounded border px-4 text-base outline-none transition duration-300 ${
                                        errors.phone
                                            ? "border-amber-400"
                                            : "border-black hover:border-amber-400"
                                    } ${
                                        phoneFocused
                                            ? "text-black placeholder:text-black"
                                            : phoneHovered
                                              ? "text-black placeholder:text-gray-400"
                                              : "text-black placeholder:text-gray-400"
                                    }`}
                                />

                                <div className='min-h-5'>
                                    {errors.phone && (
                                        <p className='text-amber-500 text-xs'>
                                            {data.modals.required}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='shrink-0 md:pt-6'>
                                <button
                                    type='submit'
                                    className='h-11 w-full md:w-auto md:px-6 border border-amber-400 rounded-[5px] bg-[#FFC107] hover:bg-inherit hover:text-amber-400 text-base text-black transition duration-300'
                                >
                                    {data.modals.otpravit}
                                </button>
                            </div>
                        </form>
                        <p className='mt-5 text-[#888] text-[14px]'>
                            {data.modals.text1}
                            <a
                                href='https://rtrf.ru/upload/privacy_policy.pdf'
                                className='underline text-blue-900'
                            >
                                {data.modals.text2}
                            </a>
                        </p>
                    </div>
                </div>

                <div className='hidden min-[1100px]:block w-100 h-80 shrink-0'>
                    <img
                        src='/homePagePhotos/questions-section-img.webp'
                        className=' w-auto h-full max-w-none object-left'
                    />
                </div>
            </div>
        </section>
    );
};
export default QuestionsSection;
