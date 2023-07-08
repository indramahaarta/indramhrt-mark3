import { Card } from "@chakra-ui/react";
import Image from "next/image";

const ExperienceList = ({
  data,
}: {
  data: {
    img: string;
    name: string;
    type: string;
    content: string;
    imgType: number;
    blurColorStyle: string;
  };
}) => {
  return (
    <Card className="bg-[#f9fafb] basis-[400px] max-w-[400px] max-h-[400px] md:max-w-full max-w-1/2 grow !aspect-square hover:cursor-pointer group relative mx-auto border-[1px] border-[#f2f4f7] rounded-md">
      <div
        className={`hidden h-full w-full px-4 py-4 flex flex-col justify-end z-[90] text-[#333] group-hover:bg-[#f9fafbee] group-hover:block group-hover:saturate-50 group-hover:grayscale rounded-sm`}
      >
        <div className="h-full flex flex-col gap-2 lg:gap-4 justify-end p-4 lg:p-8 max-w-[80%] text-[#6e6e6e]">
          <p className="text-[0.8rem]">{data.type}</p>
          <p className="text-[1.2rem] font-bold">{data.name}</p>
          <p className="">{data.content}</p>
        </div>
      </div>
      <Image
        src={data.img}
        alt={data.name}
        fill
        className={`object-contain ${
          data.imgType === 1
            ? "max-w-[120px] group-hover:max-w-[100px]"
            : "max-w-[300px] group-hover:max-w-[280px]"
        } mx-auto group-hover:grayscale group-hover:saturate-50 transition-all duration-500 ease-in-out`}
      />
    </Card>
  );
};

export default ExperienceList;
