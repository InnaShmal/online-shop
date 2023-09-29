import styles from './navBar.module.css'

function NavBar() {
  return (
    <nav className={styles['navbar']}>
      <span>Fake Store</span>
      <span>Shopping Cart</span>
    </nav>
  )
}

export default NavBar
