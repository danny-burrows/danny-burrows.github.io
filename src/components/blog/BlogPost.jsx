import React from 'react';
import styles from './BlogPost.module.css'

export default function BlogPost(props) {

    const post = props.item;

    console.log(post);

    const d = new Date(post.pubDate);

    const dateStr = d.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    return (
        <div className={styles.postBody} data-before={dateStr}>
            <h3 className={styles.postTitle}>
                <a href={post.link}>{post.title}</a>
            </h3>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    )
}