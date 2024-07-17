import { useEffect, useState } from "react";
function NewsUpdater() {
    const [news, setNews] = useState(null);
    const [newsId, setNewsId] = useState(1);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`);
            const data = await response.json();
            setNews(data);
        }   
        const updateNews = setInterval(() => {
            fetchNews();
            setNewsId((count) => count + 1)
        }, 2000)
        fetchNews();
        return () => {
            clearInterval(updateNews);
            setNews(null);
        }
    }, [newsId]);
    return (
        <div id="news">
            {news ? (
                    <div>
                        <h1>Notícias</h1>
                        <h2>{news.title}</h2>
                        <article>{news.body}</article>
                    </div>
            ) : (
                <p>Carregando notícias...</p>
            )
            }
        </div>
    );
}
export default NewsUpdater;