import { FC } from "react"
import styles from "./Card.module.scss"

const miniYodaURL =
  "https://cdn.vox-cdn.com/thumbor/T7023GcaDpo72-j09msHV5LYdX8=/0x0:2072x1398/1400x1400/filters:focal(1036x699:1037x700)/cdn.vox-cdn.com/uploads/chorus_asset/file/19659612/Screen_Shot_2020_01_30_at_4.37.59_PM.png"

export const Card: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={miniYodaURL} alt="Mini Yoda" />
      </div>
      <h2 className={styles.title}>Some card title</h2>
    </div>
  )
}
