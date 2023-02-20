import { FC } from "react"
import styles from "./App.module.scss"
import { Card, Header } from ".."

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Card />
    </div>
  )
}
