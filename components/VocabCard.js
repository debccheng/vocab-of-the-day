import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VocabCard = ({ post }) => {
  return (
    <Carousel
      showThumbs={false}
      dynamicHeight={false}
      showIndicators={false}
      infiniteLoop
    >
      {post.img
        .map((path, i) =>
        <div key={path}>
          <Image
            src={path}
            height={400}
            width={400}
            alt={`${post.title}-image-${i+1}`}
          />
        </div>
        )}
    </Carousel>
  )
}

export default VocabCard;