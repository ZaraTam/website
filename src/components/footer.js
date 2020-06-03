import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      © {new Date().getFullYear()} - created by Zara
    </footer>
  )
}

export default Footer
