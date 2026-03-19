const data = [
  {
    id: 1,
    title: "Ever-evolving L7",
    info: "We set world records, constantly update methods, find vulnerabilities in your targets, and use the fastest networks.",
  },
  {
    id: 2,
    title: "Botnet powered L4",
    info: "Up-to-date, flexible methods outperforming all competitor defenses. Power from 40 GB/s to 4 TB/s",
  },
  {
    id: 3,
    title: "Additional Services",
    info: "In addition to IP Stresser services, we offer free and automated ULP Leak Check, Pentest, and a paid Domain Takedown - everything to eliminate your targets",
  },
];

export default function Acard() {
  return (
    <>
      {data.map((d) => (
        <div
          key={d.id}
          className="bg-gradient-to-br from-black to-violet-600 backdrop-blur-xl !p-[40px] rounded-3xl "
        >
            <h3 className="text-gray-500 text-2xl !mb-[20px] font font-extralight max-[434px]:text-lg uppercase ">{d.title}</h3>
            <p className="text-gray-400 backdrop-blur-3xl border !py-[30px] !px-[20px] rounded-xl border-gray-800 h-[150px] leading-5 max-[395px]:h-[200px] max-[395px]:text-wrap ">{d.info}</p>
        </div>
      ))}
    </>
  );
}
