import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function Header() {
  const navLinks = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "about",
      href: "/about",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ];

  return (
    <header className={`${styles.header} maxWidth`}>
      <div>
        <Link href={"/"}>
          <Image
            src="./logo/logo.png"
            alt="Go to home"
            height={50}
            width={100}
            className={styles.logo}
          />
        </Link>
      </div>

      <nav>
        <ul className={styles.nav}>
          {navLinks.map((navLink) => (
            <li key={navLink.href} className="underlined">
              <Link href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
