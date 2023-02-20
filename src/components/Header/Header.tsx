import { FC } from "react"
import styles from "./Header.module.scss"

type SomeLinkProps = {
  href: string
  text: string
}

const SomeLink: FC<SomeLinkProps> = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  )
}

type Link = {
  id: string | number
  text: string
  link: string
}

const links: Link[] = [
  {
    id: 0,
    link: "#home",
    text: "Home",
  },
  {
    id: 1,
    link: "#about",
    text: "About us",
  },
  {
    id: 2,
    link: "#contact",
    text: "Contact Us",
  },
]

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {links.map((link) => (
            <SomeLink key={link.id} href={link.link} text={link.text} />
          ))}
        </ul>
      </nav>
    </header>
  )
}
