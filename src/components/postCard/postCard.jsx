import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}> 
                <div className={styles.imgContainer}> 
                    <Image 
                     src="https://images.pexels.com/photos/23440271/pexels-photo-23440271/free-photo-of-a-desk-with-a-lamp-and-a-book-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="" 
                     fill 
                     className={styles.img} 
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.bottom}> 
                <h1 className={styles.title}> Title </h1>
                <p className={styles.desc} > 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolor ratione accusamus obcaecati earum quasi provident officia quaerat corporis, perferendis commodi ipsa inventore! Dicta, cumque commodi! Beatae nemo excepturi fugit?      
                </p>
                <Link className={styles.link} href="/blog/post"> Read More </Link>
            </div>
       </div>
    
)
};

export default PostCard;