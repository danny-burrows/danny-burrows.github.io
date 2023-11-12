import React from 'react';
import styles from './PortfolioItem.module.css'

const PortfolioItem = (props) =>  {
    const portfolio_item_ref = React.useRef(null);
    
    React.useEffect(() => {
        if (props.title) {
            portfolio_item_ref.current.style.setProperty('aspect-ratio', `9 / 5`);
        }

        // TODO: Axe this.
        if (props.title == "Loki") {
            portfolio_item_ref.current.style.setProperty('outline', `solid #b0b0b0 2px`);
        }

        if (props.imgUrl) {
            const tst = new Image();

            tst.onload = () => {
                portfolio_item_ref.current.style.setProperty('--img-url', `url("${props.imgUrl}")`);
                portfolio_item_ref.current.style.setProperty('--op2', "100");
            };

            tst.src = props.imgUrl;
        } else {
            portfolio_item_ref.current.style.setProperty('--op2', "100");
        }
    }, []);
    
    return (
        <a ref={portfolio_item_ref} href={props.link} className={styles.item}>
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