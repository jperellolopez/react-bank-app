// testimonials = client feedback
import React from 'react'
import { feedback } from '../constants'
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
 
const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:md-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>
        Opiniones de <br className='sm:block hidden' /> nuestros clientes
        </h1>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Todo lo necesario para aceptar pagos por tarjeta y hacer crecer tu negocio en cualquier parte del planeta.</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {/* destructure the 'feedback' object array and sends the props to the card component */}
        {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials