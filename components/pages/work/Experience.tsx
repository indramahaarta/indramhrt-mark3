import ExperienceList from "./components/ExperienceList";

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full boder-b-2 border-[#6e6e6e] mb-2">
        <p className="text-[1.2rem] w-full">Work</p>
      </div>
      <div className="flex w-full flex-wrap gap-6 ">
        {data.map((experience, idx) => (
          <ExperienceList key={idx} data={experience}></ExperienceList>
        ))}
      </div>
    </div>
  );
};

const data: {
  img: string;
  name: string;
  type: string;
  content: string;
  imgType: number;
  blurColorStyle: string;
}[] = [
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120088626441752647/image.png?width=640&height=836",
    name: "Ristek Fasilkom UI",
    type: "Contract",
    content:
      "RISTEK is an independent organisation in Fasilkom UI that aims to cultivate students' interests in science and technology.",
    imgType: 1,
    blurColorStyle: "group-hover:bg-[#5038BC77]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120082215485837332/Do7iFEAAAAAElFTkSuQmCC-removebg-preview.png?width=880&height=228",
    name: "Tokopedia Devcamp",
    type: "Apprenticeship",
    content:
      "Devcamp is a 7-day exclusive boot camp training for future tech leaders who desire to create impact through technology.",
    imgType: 2,
    blurColorStyle: "group-hover:bg-[#00B90677]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120092200819232919/image.png?width=600&height=746",
    name: "Bangkit Academy",
    type: "Apprenticeship",
    content:
      "Bangkit is a career readiness program that aims to produce high-caliber technical talent for world-class Indonesian technology companies and startups.",
    imgType: 1,
    blurColorStyle: "group-hover:bg-[#ED1E2477]",
  },
  {
    img: "https://media.discordapp.net/attachments/1120081834856955944/1120093301568184421/horizontal-white-en-1.png?width=2160&height=806",
    name: "Fakultas Ilmu Komputer UI",
    type: "Contract",
    content:
      "Trusted as a teaching assistant for four courses since 2021",
    imgType: 2,
    blurColorStyle: "group-hover:bg-[#FBDA0077]",
  },
];

export default Experience;
