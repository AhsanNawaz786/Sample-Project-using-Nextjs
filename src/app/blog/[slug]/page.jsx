import PostCard from "@/components/postCard/postCard";
import styles from "./Singlepost.module.css";
import { Span } from "next/dist/trace";


const SinglePostpage = ()=> {
    return <div className={styles.container}>
        <div className={styles.imgContainer}>
         <Image 
         src="https://images.pexels.com/photos/23440271/pexels-photo-23440271/free-photo-of-a-desk-with-a-lamp-and-a-book-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt=""
         fill
         className={styles.img}
         />
            
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
                <Image 
                     src="https://images.pexels.com/photos/23440271/pexels-photo-23440271/free-photo-of-a-desk-with-a-lamp-and-a-book-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      fill 
                      />
                      <div className={styles.detailText}>
                        <span className={styles.detailTitle}> Author </span>
                        <span className={styles.detailValue}> Ahsan Nawaz </span>
                      </div>

                      <div className={styles.detailText}>
                        <span className={styles.detailTitle}> Published </span>
                        <span className={styles.detailValue}> 01.04.2024 </span>
                      </div>
            </div>

            <div className={styles.content}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sed voluptate perspiciatis consequuntur natus vel ipsa! Debitis saepe voluptas sed. Laboriosam, sunt similique iste quod tempore vel odio veniam cumque!
            </div>


        </div>
        
    </div>
};

export default SinglePostpage;
