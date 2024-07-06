import styles from "./footer.module.css";

const Footer = ()=> {
    return (
        <div className={styles.container}> 
            
            <div className={styles.logo}> Ahsan Dev</div>
            
            <div className={styles.text}> 
                A full stack developer, All rigths reserved.                
            </div>
       
        </div>
    )
};

export default Footer;
