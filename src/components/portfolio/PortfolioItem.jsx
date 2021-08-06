import React from 'react';
import styles from './PortfolioItem.module.css'


const PortfolioItem = (props) =>  {
    
    React.useEffect(() => {
        const port_item = document.getElementById(props.ids);
        if (props.imgUrl) {
            const tst = new Image();

            tst.onload = () => {
                port_item.style.setProperty('--img-url', `url("${props.imgUrl}")`);
                port_item.style.setProperty('--op2', "100");
            };
            
            tst.src = props.imgUrl;
        } else {
            port_item.style.setProperty('--op2', "100");
        }
    }, []);
    
    return (
        <a href={props.link} id={props.ids} className={styles.item}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.content}>{props.content}</p>
        </a>
    )
}

PortfolioItem.defaultProps = {
    title: "",
    content: "",
    link: "#",
    imgUrl: ""
}

export default PortfolioItem