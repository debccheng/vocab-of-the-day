import { useState } from 'react';
import Head from 'next/head'
import { getPosts, processPosts } from '../pages/api/getPosts';
import {
  subreddit,
  defaultType,
  defaultLimit,
} from '../pages/api/getPosts.config';
import {
  PageWrapper,
  Main,
  Footer,
  FooterLink,
  FetchMoreButton
} from '../styles/Index.sc';
import { VocabCardWrapper } from '../styles/VocabCard.sc';
import VocabCard from '../components/VocabCard';

export async function getStaticProps() {
  const initialData = await getPosts(
    subreddit,
    defaultType,
    defaultLimit,
  )
  if (!initialData) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      initialData
    }
  }
}

export default function Home({ initialData }) {
  const [posts, setPosts] = useState(initialData);
  const [limit, setLimit] = useState(defaultLimit + 10);

  const handleClick = async () => {
    setLimit(limit => limit + 10);
    const newPosts = await getPosts(subreddit, defaultType, limit);
    setPosts(newPosts);
  }

  return (
    <PageWrapper>
      <Head>
        <title>Vocab of the Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {posts && processPosts(posts)
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
        <FetchMoreButton onClick={handleClick}>fetch more</FetchMoreButton>
      </Footer>
    </PageWrapper>
  )
}
