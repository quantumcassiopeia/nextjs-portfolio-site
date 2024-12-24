import styles from "./styles.module.scss";
import Image from "next/image";
import profilePic from "@/public/static/images/linkZelda.jpg";
import Button from "../button/button";
import NavList from "../navList/navList";

export default function NavBar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Image
          src={profilePic}
          alt="Logo"
          height={500}
          width={500}
          className={styles.logo}
        />

        <div className={styles.navbar__right}>
          <NavList />
          <Button label="Contact" />
        </div>
      </nav>
    </header>
  );
}
