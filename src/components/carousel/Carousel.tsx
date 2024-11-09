import { useState } from "react";

interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[250px]">
            <img src={images[currentIndex]} alt={`슬라이드 ${currentIndex + 1}`} className="object-cover w-full h-full" />

            <button
                onClick={handlePrevious}
                className="flex absolute left-4 top-1/2 justify-center items-center w-8 h-8 text-2xl font-bold text-white rounded-full transition-all -translate-y-1/2 hover:text-black"
            >
                &lt;
            </button>

            <button
                onClick={handleNext}
                className="flex absolute right-4 top-1/2 justify-center items-center w-8 h-8 text-2xl font-bold text-white rounded-full transition-all -translate-y-1/2 hover:text-black"
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
