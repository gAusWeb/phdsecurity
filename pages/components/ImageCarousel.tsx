import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ImageCarousel = (): JSX.Element => (
    <Carousel
        infiniteLoop
        useKeyboardArrows
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={7000}
        swipeable
    >
        <div>
            <div
                style={{ width: "100%", height: "454px", position: "relative" }}
            >
                <Image
                    src="/security-guards-1.jpeg"
                    alt="security guards carousel 1"
                    layout="fill"
                    objectFit="cover"
                />
                <p className="legend">Legend 1</p>
            </div>
        </div>
        <div>
            <Image
                src="/security-guards-1.jpeg"
                alt="security guards carousel 1"
                layout="fill"
                objectFit="cover"
            />
            <p className="legend">Legend 2</p>
        </div>
    </Carousel>
);

export default ImageCarousel;
