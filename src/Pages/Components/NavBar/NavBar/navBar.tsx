import styles from './navBar.module.css'

function NavBar() {
  return (
    <nav className={styles['navbar']}>
      <span>Logo</span>
      <span>My Cart</span>
    </nav>
  )
}

export default NavBar
