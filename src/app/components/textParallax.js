
'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../../public/images/1.jpg'
import Picture2 from '../../../public/images/2.jpg'
import Picture3 from '../../../public/images/3.jpg'
import Lenis from 'lenis';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TextParallax() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden">
      <div className='h-[100vh]'/>
      <div ref={container} className='bg-gray-100'>
        <Slide src={Picture1} direction={'left'} left={"-30%"} progress={scrollYProgress}/>
        <Slide src={Picture2} direction={'right'} left={"-45%"} progress={scrollYProgress}/>
        <Slide src={Picture3} direction={'left'}  left={"-85%"} progress={scrollYProgress}/>
        <Slide src={Picture2} direction={'right'} left={"-5%"} progress={scrollYProgress}/>
      </div>
      <div className='h-[100vh]' />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </motion.div>
  )
}

const Phrase = ({src} ) => {

  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>안녕하세요</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}