import Image from "next/image";

type ServiceCardProps = {
  image: string;
  children: React.ReactNode;
};

const ServiceCard = ({ image, children }: ServiceCardProps) => {
  return (
    <div className="flex size-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-md bg-[#181A1C]">
      <div className="relative size-16">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 48px, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <span className="text-sm text-white">{children}</span>
    </div>
  );
};

export default ServiceCard;
