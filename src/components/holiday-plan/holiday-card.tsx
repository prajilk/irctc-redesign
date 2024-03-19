import Image from "next/image";
import { Button } from "../ui/button";

const HolidayCard = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-[#181A1C] p-5">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <Image
          src={"/card-img-1.png"}
          alt=""
          priority
          fill
          sizes="(max-width: 768px) 48px, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h4 className="text-xl text-white">Maharajas&apos; Express</h4>
      <p className="text-center text-xs text-[#ADADAD]">
        Redefining Royalty, Luxury and Comfort, Maharajas&apos; express takes
      </p>
      <Button
        className="rounded-lg bg-[#2475EE] hover:bg-[#2475EE]/70"
        size={"sm"}
      >
        Read more
      </Button>
    </div>
  );
};

export default HolidayCard;
