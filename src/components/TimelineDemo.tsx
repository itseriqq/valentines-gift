import { Timeline } from "@/components/ui/Timeline";
import { TiltSpotlight } from "./TiltCard";

export default function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3242.jpg?alt=media&token=be7e84e4-4aac-4653-b2a0-2fe4255b700c"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4393.jpg?alt=media&token=d9ae2f45-7747-42f2-a9de-fbbab25d83fd"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_2149.jpg?alt=media&token=51106de2-d8b9-4ea9-a4fa-4d2b911acdaf"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3219.jpg?alt=media&token=f2d29537-4c20-426b-ac4d-a63a3d518db3"/>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8799.jpg?alt=media&token=c7074b53-960f-4df7-a49a-3377fed6caba"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8937.jpg?alt=media&token=916ca25b-6006-4e9d-8658-73eae11001e7"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8994.jpg?alt=media&token=32016ab9-6e2e-40d0-9cfb-763b24140812"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9611.jpg?alt=media&token=8185115d-dfc9-470c-971c-1d2530fb4306"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9620.jpg?alt=media&token=b61edd46-0f44-4099-90a7-0a3c141fd7c9"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9690.jpg?alt=media&token=9de020d8-b263-4a14-af6d-b359b0f4b9c4"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_9277.jpg?alt=media&token=c88cf961-d4f0-44af-8b4f-e1e618e38daa"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4461.jpg?alt=media&token=fd34b836-e1a0-4db2-8a48-958b19cb6608"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4758.jpg?alt=media&token=5d2687a0-986a-459e-82d3-75e93677cc2a"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_5263.jpg?alt=media&token=87a55969-c3a4-4d0b-9cb5-8d6008bcb881"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_6167.jpg?alt=media&token=fc3b6b36-9d03-4f90-bdc0-3f1700a63f97"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_6376.jpg?alt=media&token=af19d087-d67c-4c29-a58b-6d986a5736ee"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7020.jpg?alt=media&token=e394ee3f-71da-4c38-b3a9-225b417ddf57"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7036.jpg?alt=media&token=bc2121a1-9edc-4863-b395-1bbc56798799"/>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-bold">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8862.jpg?alt=media&token=e0a80a17-c5ea-4c1d-9ee6-876fd1ff7912"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7289.jpg?alt=media&token=9dce7d47-ee6e-49d7-83af-2101cb435d48"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8862.jpg?alt=media&token=e0a80a17-c5ea-4c1d-9ee6-876fd1ff7912"/>
            <TiltSpotlight image="https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8061.jpg?alt=media&token=e9fa4e9f-f50c-4bb8-b616-c38cc102bc80"/>
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full ">
      <div className="top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
