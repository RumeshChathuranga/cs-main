import { DraggableCardBody, DraggableCardContainer } from './ui/draggable-card'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './motion/Reveal'
import { galleryImages } from '../data/galleryImages'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Gallery() {
  const reducedMotion = useReducedMotion()
  const visibleImages = reducedMotion
    ? galleryImages.filter((item) => !item.mobileHidden).slice(0, 4)
    : galleryImages

  return (
    <section id="gallery" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Our Community"
            title="Moments That Move Us"
            description="Exchanges, events, and friendships from AIESEC in Colombo South — captured in motion."
          />
        </Reveal>

        <div className="mt-14">
          <DraggableCardContainer className="bg-surface relative flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-2xl md:min-h-[600px]">
            <p
              aria-hidden
              className="text-text-faint pointer-events-none absolute top-1/2 mx-auto max-w-md -translate-y-1/2 px-6 text-center text-2xl font-extrabold md:max-w-xl md:text-4xl"
            >
              One experience at a time.
            </p>

            {visibleImages.map((item) => (
              <DraggableCardBody
                key={item.alt}
                className={`${item.className} ${item.mobileHidden ? 'hidden md:block' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="pointer-events-none relative z-10 h-56 w-56 object-cover md:h-72 md:w-72"
                />
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>

          {!reducedMotion && (
            <p className="text-text-muted mt-6 text-center text-sm">Drag the photos to explore</p>
          )}
        </div>
      </div>
    </section>
  )
}
