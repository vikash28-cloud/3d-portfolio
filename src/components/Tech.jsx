import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <>
      <div className="w-full flex justify-center text-center">
        <motion.div className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  ">
          <p className={styles.sectionSubText}>Tech Skills</p>

        </motion.div>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />

          </div>
        ))}
      </div>

    </>

  )
}

export default SectionWrapper(Tech, "tech")