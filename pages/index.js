import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getPostData } from '../pages/api/getPosts';
import VocabCard from '../components/VocabCard';

export async function getStaticProps() {
  const subreddit = 'vocabwordoftheday';
  const data = await getPostData(subreddit);
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data
    },
  }
}

export default function Home({ data }) {
  // console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {data
          .map(post =>
            <div
              className={styles.vocabCard}
              key={post.title}
            >
              <VocabCard
                post={post}
              />
            </div>
          )}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.reddit.com/r/VocabWordOfTheDay/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          r/VocabWordOfTheDay
        </a>
      </footer>
    </div>
  )
}
