import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  imgUrl: string;
  imgUrl2: string;
  imgUrl3: string;
}

export default function CarouselForCard({ imgUrl, imgUrl2, imgUrl3 }: IProps) {
  return (
    <div className="flex flex-col z-[-1] relative">
      <Carousel
        className="z-[0]"
        ssr={false}
        responsive={responsive}
        infinite={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        <div className="relative">
          <Image
            className="rounded-t-xl"
            src={imgUrl!}
            alt="car-1"
            width={400}
            height={150}></Image>
        </div>
        <div className="relative">
          <Image
            className="rounded-t-xl"
            src={imgUrl2!}
            alt="car-2"
            width={400}
            height={150}></Image>
        </div>
        <div className="relative">
          <Image
            className="rounded-t-xl"
            src={imgUrl3!}
            alt="car-3"
            width={400}
            height={150}></Image>
        </div>
      </Carousel>
    </div>
  );
}
