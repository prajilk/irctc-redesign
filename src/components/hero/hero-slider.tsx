import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/image-slider";

const HeroSlider = () => {
  const images = ["/image-1.png", "/image-2.png", "/image-3.png"];
  return (
    <ImagesSlider className="h-[40rem]" images={images} direction="left">
      <div className="relative size-full after:absolute after:bottom-0 after:z-10 after:block after:h-32 after:w-full after:bg-gradient-to-t after:from-black after:to-black/10"></div>
    </ImagesSlider>
  );
};

export default HeroSlider;
