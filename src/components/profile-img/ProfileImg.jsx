import React from "react"
import styles from './ProfileImg.module.css'

export default function ProfileImg() {
    
    React.useEffect(() => {
        const img_holder = document.getElementById("profile-img");

        img_holder.onload = () => {
            console.log("Image Loaded");
            img_holder.style.setProperty("--w", "9rem");
            img_holder.style.setProperty("--mr", "2rem");
            setTimeout(() => {img_holder.style.setProperty("--op", "100");}, 287);
        };

        img_holder.src="https://avatars.githubusercontent.com/u/44483126?s=400&u=d58477c436271c4ae3f1640f2e208c14205b7da0&v=4";
    }, []);

    return (
        <img id="profile-img" className={styles.img}></img>
    )
}