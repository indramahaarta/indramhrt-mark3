import { Card } from "@chakra-ui/react";
import Image from "next/image";
import { type } from "os";

const ProjectList = ({
  data,
}: {
  data: { img: string; name: string; type: number; blurColorStyle: string };
}) => {
  return (
    <Card className="bg-[#eee] basis-[400px] max-w-[400px] max-h-[400px] md:max-w-full max-w-1/2 grow !aspect-square rounded-lg hover:cursor-pointer group relative mx-auto">
      <div
        className={`hidden h-full w-full px-4 py-4 flex flex-col justify-end rounded-lg z-[90] text-[#333] group-hover:bg-[#eeee] group-hover:block group-hover:saturate-50 group-hover:grayscale`}
      >
        <div>
          <p className="text-[1.8rem] font-bold">{data.name}</p>
        </div>
      </div>
      <Image
        src={data.img}
        alt={data.name}
        fill
        className={`object-contain ${
          data.type === 1 ? "max-w-[120px]" : "max-w-[300px]"
        } mx-auto group-hover:grayscale group-hover:saturate-50`}
      />
    </Card>
  );
};

export default ProjectList;
