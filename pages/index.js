import Head from 'next/head'
import { getPostData } from '../pages/api/getPosts';
import { PageWrapper, Main, Footer, FooterLink } from '../styles/Index.sc';
import { VocabCardWrapper } from '../styles/VocabCard.sc';
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
  return (
    <PageWrapper>
      <Head>
        <title>Vocab of the Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {data
          .map(post =>
            <VocabCardWrapper
              key={post.title}
            >
              <VocabCard
                post={post}
              />
            </VocabCardWrapper>
          )}
      </Main>
      <Footer>
        <FooterLink
          href="https://www.reddit.com/r/VocabWordOfTheDay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          r/VocabWordOfTheDay
        </FooterLink>
      </Footer>
    </PageWrapper>
  )
}
