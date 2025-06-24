import SectionTransition from "../app/components/sectionTransition"
import TextParallax from "../app/components/textParallax"
import ZoomParallax from "../app/components/zoom-parallax/zoomParallax"

export default function Home() {
  return(
    <div>
      <ZoomParallax/>
      <SectionTransition/>
      <TextParallax/>
    </div>
  )
}