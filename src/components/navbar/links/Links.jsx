'use-client';

import { link } from "fs";
import path from "path";
import { title } from "process";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
        {
            title: 'HomePage',
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    const Links = ()=> {
        const [open,setOpen]= useState(false);


    //Temporay
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>


        <div className={styles.links}>
          {Links.map(link =>(
            <NavLink item ={link} key={link.title} />
          ))}
          {session ? (
            <>
            {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
            <button className={styles.logout}> Logout</button>
            </>

          ): (
                <NavLink item={{title:"Login", path: "/Login"}} />
            )
          }
        </div>

        <button> Menu </button>
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link)=> {
                    <NavLink  item={link} key={link.title}/>
                })}
       </div>
        }
    </div>
    );
    };

export default Links;