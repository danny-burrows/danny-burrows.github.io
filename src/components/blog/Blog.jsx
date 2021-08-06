import React from 'react'
import ReactDOM from 'react-dom'
import BlogPost from './BlogPost'
import styles from './Blog.module.css'


export default function Blog() {

    React.useEffect(() => {
        const url = 'https://medium.com/@dannyburrows_97230/feed';

        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status == "ok") {
            
                const children = data.items.map((item) => {
                    return (
                        <BlogPost key={item.link} item={item} />
                    )
                })

                const item = (
                    <div className={styles.posts}>
                        {children}
                    </div>
                )

                ReactDOM.render(item, document.getElementById('blog-posts'));
            }
        });
    }, []);

    return (
        <article className={styles.blogContainer}>
            <section>
                <h2>Blog Posts</h2>
                <div id="blog-posts"></div>
            </section>
        </article>
    )
}