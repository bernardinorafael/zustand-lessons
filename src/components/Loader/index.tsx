import { SpinnerGap } from '@phosphor-icons/react'

import styles from './styles.module.css'

export function Loader() {
  return (
    <div className={styles.spinnerBox}>
      <SpinnerGap weight="bold" size={28} />
    </div>
  )
}
