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
    <header className={styles.header}>
      <div>
        <Link href={"/"}>
          <Image
            src="/logo.jpeg"
            alt="Go to home"
            width={100}
            height={100}
            quality={100}
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
