import React from 'react'
import styles from '@/cssModules/ConfirmationBox.module.css';
export default function ConfirmationBox ({
  title="Do You want Continue this Action?",
  trueBtn = 'Process',
  falseBtn ="Cancle",
  closeModal = null,
  trueFunction = null
}) {
  return (
    <div>
      <p onClick={closeModal} className={styles.Close} title='close modal' ></p>
      <p className={styles.Modal}>
        <span onCanPlay={closeModal} className={styles.closeBtn}>&times;</span>
        <p className='mt-5 mx-3 text-danger fw-bold'>
          {title}
        </p>
        <div className='row'>
          <button onClick={closeModal} className='col-6 btn rounded-0 btn-secondary'>{falseBtn}</button>
          <button  onClick={trueFunction} className='col-6 btn rounded-0 btn-warning'>{trueBtn}</button>
        </div>
      </p>
    </div>
  )
}