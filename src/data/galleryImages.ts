import { images } from '../assets/images'

export interface GalleryImage {
  image: string
  alt: string
  className: string
  mobileHidden?: boolean
}

export const galleryImages: GalleryImage[] = [
  {
    image: images.gallery.volunteer1,
    alt: 'AIESEC volunteer working on a community project abroad',
    className: 'absolute top-6 left-[8%] rotate-[-6deg] z-10',
  },
  {
    image: images.gallery.leadSummit,
    alt: 'AIESEC members at a leadership summit',
    className: 'absolute top-4 left-[38%] rotate-[3deg] z-20',
  },
  {
    image: images.gallery.volunteer2,
    alt: 'Global Volunteer experience with local community',
    className: 'absolute top-10 right-[6%] rotate-[7deg] z-10',
    mobileHidden: true,
  },
  {
    image: images.gallery.teaching,
    alt: 'Global Teacher volunteer teaching in a classroom',
    className: 'absolute top-[42%] left-[4%] rotate-[-4deg] z-30',
  },
  {
    image: images.gallery.team,
    alt: 'AIESEC in Colombo South team members',
    className: 'absolute top-[38%] left-[32%] rotate-[2deg] z-40',
  },
  {
    image: images.gallery.host,
    alt: 'Volunteers with their host family abroad',
    className: 'absolute top-[40%] right-[10%] rotate-[-8deg] z-20',
    mobileHidden: true,
  },
  {
    image: images.gallery.professionals,
    alt: 'Global Talent professionals at an international workplace',
    className: 'absolute bottom-4 left-[18%] rotate-[5deg] z-10',
    mobileHidden: true,
  },
  {
    image: images.gallery.volunteer3,
    alt: 'Volunteers collaborating on a global impact project',
    className: 'absolute right-[14%] bottom-6 rotate-[-3deg] z-30',
  },
]
