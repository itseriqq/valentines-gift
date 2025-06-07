import { 
  GridBody,
  DraggableContainer,
  GridItem, 
  } from "@/components/ui/InfiniteDragScroll";

const images = [
  {
    id: 1,
    alt: "Silhouette of a traditional Japanese pagoda at sunset",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/528A5A83-B135-48FF-B11C-699A20E30238.jpg?alt=media&token=69cadee4-97ee-4255-a51d-2f9830c63625",
  },
  {
    id: 2,
    alt: "Himeji Castle on a clear day",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_0999.JPG?alt=media&token=c1edee0a-b45d-4aeb-b6bb-d9d6e2bb89fe",
  },
  {
    id: 3,
    alt: "Red Car",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_1004.JPG?alt=media&token=2512ce0a-c8b2-4153-abe9-65e3756860da",
  },
  {
    id: 4,
    alt: "Woman in kimono standing beside a traditional Japanese house",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_3242.jpg?alt=media&token=be7e84e4-4aac-4653-b2a0-2fe4255b700c",
  },
  {
    id: 5,
    alt: "Group of men in black suits inside a hallway",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4393.jpg?alt=media&token=d9ae2f45-7747-42f2-a9de-fbbab25d83fd",
  },
  {
    id: 6,
    alt: "Crowd walking through a street decorated with red lanterns",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4461.jpg?alt=media&token=fd34b836-e1a0-4db2-8a48-958b19cb6608",
  },
  {
    id: 7,
    alt: "Timelapse of traffic lights and buildings at night",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4880.jpg?alt=media&token=668579fb-fd7d-4d82-ab82-d7eb42aa0a9b",
  },
  {
    id: 8,
    alt: "Close-up of orange and black wooden torii gate posts",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_5263.jpg?alt=media&token=87a55969-c3a4-4d0b-9cb5-8d6008bcb881",
  },
  {
    id: 9,
    alt: "Historic building with brown and white stone exterior in daylight",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_6376.jpg?alt=media&token=af19d087-d67c-4c29-a58b-6d986a5736ee",
  },
  {
    id: 10,
    alt: "Lantern glowing on a quiet street at night",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7020.jpg?alt=media&token=e394ee3f-71da-4c38-b3a9-225b417ddf57",
  },
  {
    id: 11,
    alt: "View of Osaka Castle with clear sky backdrop",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7036.jpg?alt=media&token=bc2121a1-9edc-4863-b395-1bbc56798799",
  },
  {
    id: 12,
    alt: "Pagoda silhouetted during golden hour",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_4880.jpg?alt=media&token=668579fb-fd7d-4d82-ab82-d7eb42aa0a9b",
  },
  {
    id: 13,
    alt: "Himeji Castle seen from a distance",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7041.jpg?alt=media&token=0513ac9c-a998-41a3-9324-bc41ba4a39fb",
  },
  {
    id: 14,
    alt: "Torii gate pillars in vibrant orange and black",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7089.jpg?alt=media&token=c2de1a58-213f-4d4d-b391-3564ec93b2e6",
  },
  {
    id: 15,
    alt: "Traditional Japanese home under daylight",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_7289.jpg?alt=media&token=9dce7d47-ee6e-49d7-83af-2101cb435d48",
  },
  {
    id: 16,
    alt: "Women wearing kimono beside wooden house",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8054.jpg?alt=media&token=9191c6a2-6b8f-4d1a-bd89-1638fd3eb7a0",
  },
  {
    id: 17,
    alt: "People passing under hanging red lanterns at dusk",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8061.jpg?alt=media&token=e9fa4e9f-f50c-4bb8-b616-c38cc102bc80",
  },
  {
    id: 18,
    alt: "Stepping stone path winding through lush forest",
    src: "https://firebasestorage.googleapis.com/v0/b/estoquestartgrafica.firebasestorage.app/o/IMG_8067.jpg?alt=media&token=3a1c45df-519e-4713-954f-e4a932ae4884",
  },
];

const Gallery = () => {
  return (
     <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image) => (
          <GridItem
            key={image.id}
            className="relative h-54 w-36 md:h-96 md:w-64"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="pointer-events-none absolute h-full w-full object-cover"

            />
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
};

export default Gallery;
