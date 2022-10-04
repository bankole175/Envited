import styles from './input.module.css'
import { FC } from 'react'
import {InputT} from "../../utils/type";
import style from './input.module.css'

export const TextField: FC<InputT> = ({
  type = 'text',
  required = false,
  label,
  error,
  ...inputProps
}) => {
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <input
          className={styles.formControl}
        type={type}
        {...inputProps}
        required={required}
      />
    </>
  )
}
