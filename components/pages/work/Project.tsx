import ProjectList from "./components/ProjectList";

const Project = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full boder-b-2 border-[#6e6e6e] mb-2">
        <p className="text-[1.2rem] w-full">Work</p>
      </div>
      <div className="flex w-full flex-wrap gap-6 ">
        {data.map((project, idx) => (
          <ProjectList key={idx} data={project}></ProjectList>
        ))}
      </div>
    </div>
  );
};

const data: {
  img: string;
  name: string;
  type: number;
  blurColorStyle: string;
}[] = [
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120088626441752647/image.png?width=640&height=836",
    name: "Ristek Fasilkom UI",
    type: 1,
    blurColorStyle: "group-hover:bg-[#5038BC77]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120082215485837332/Do7iFEAAAAAElFTkSuQmCC-removebg-preview.png?width=880&height=228",
    name: "Tokopedia Devcamp",
    type: 2,
    blurColorStyle: "group-hover:bg-[#00B90677]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120092200819232919/image.png?width=600&height=746",
    name: "Bangkit Academy",
    type: 1,
    blurColorStyle: "group-hover:bg-[#ED1E2477]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120093301568184421/horizontal-white-en-1.png?width=2160&height=806",
    name: "Fakultas Ilmu Komputer UI",
    type: 2,
    blurColorStyle: "group-hover:bg-[#FBDA0077]",
  },
];

export default Project;
