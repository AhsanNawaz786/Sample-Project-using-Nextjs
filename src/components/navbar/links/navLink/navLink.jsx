"use client";

import Link from "next/link";
import PropTypes from 'prop-types';
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
    const pathname = usePathname();

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
            {item.title}
        </Link>
    );
};

NavLink.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default NavLink;
