import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  VocabCardStyled,
  ImageWrapper,
  TextSection,
  Heading,
  Author,
  Title,
  PostInfo,
  Date,
  InteractiveSection,
  Stats,
  StatsSection,
  RedditLink
} from '../styles/VocabCard.sc';
const { DateTime } = require("luxon");

const VocabCard = ({ post }) => {
  const [localDate, setLocalDate] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const date = DateTime.fromSeconds(post.created);
      setLocalDate(date.toLocaleString(DateTime.DATETIME_SHORT));
    }
  });

  return (
    <VocabCardStyled>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        showIndicators={false}
        infiniteLoop
      >
        {post.img
          .map((path, i) =>
            <ImageWrapper key={path}>
              <Image
                src={path}
                height={400}
                width={400}
                alt={`${post.title}-image-${i + 1}`}
              />
            </ImageWrapper>
          )}
      </Carousel>
      <TextSection>
        <Heading>
          <Title>{post.title}</Title>
          <PostInfo>
            <Date>{localDate}</Date>
            <Author>{post.author}</Author>
          </PostInfo>
        </Heading>
        <InteractiveSection>
          <StatsSection>
            <Stats>{post.upvotes} upvotes</Stats>
            <Stats>{post.numberOfComments} comments</Stats>
          </StatsSection>
          <RedditLink
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            check post
          </RedditLink>
        </InteractiveSection>
      </TextSection>
    </VocabCardStyled>
  )
}

export default VocabCard;