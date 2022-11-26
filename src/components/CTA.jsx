// call to action section = goes above the footer
import React from 'react'
import styles from "../style"
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
          ¡Pruebe nuestro servicio ahora!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Todo lo que necesitas para aceptar pagos por tarjeta y hacer crecer tu negocio en cualquier parte del mundo.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA