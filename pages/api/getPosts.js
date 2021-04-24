export async function getPosts(subreddit) {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (response.status !== 200) {
      const resMessage = await response.json();
      throw new Error(`${response.status} - ${resMessage.error}`);
    } else if (!response.ok) {
      throw new Error('Something went wrong');
    } else {
      return response.json();
    }
  } catch (error) {
    console.warn(error);
  }
}

export async function getPostData(subreddit) {
  const imageGroups = [];
  const posts = await getPosts(subreddit);

  posts.data.children.map(post => {
    if (
      post.data.gallery_data
      && post.data.media_metadata
      && !(post.data.title.trim()).match(' ')
    ) {
      const imageGroup = [];
      for (let key in post.data.gallery_data.items) {
        const mediaId = post.data.gallery_data.items[key].media_id;
        for (let key in post.data.media_metadata) {
          if (post.data.media_metadata[key].id === mediaId) {
            const rawImageSrc = post.data.media_metadata[key].s.u;
            const imageSrc = rawImageSrc.replaceAll('&amp;', '&');
            imageGroup.push(imageSrc);
          }
        }
      }
      const postData = {
        title: post.data.title,
        author: post.data.author,
        created: post.data.created_utc,
        img: imageGroup,
        upvotes: post.data.score,
        numberOfComments: post.data.num_comments,
        link: `reddit.com${post.data.permalink}`
      }
      imageGroups.push(postData);
    }
    return imageGroups;
  })
  return imageGroups;
}


// export async function processPosts(subreddit) {
//   const dataArray = [];
//   const posts = await getPosts(subreddit);
//   console.log(posts)
//   posts.data.children.map(post => {
//     if (post.data.media_metadata) {
//       dataArray.push(post.data.media_metadata);
//     }
//   })
//   console.log(dataArray)
//   return dataArray;
// }

// export async function getImageSources(subreddit) {
//   const dataArray = await processPosts(subreddit);
//   const imageGroups = [];
//   for (let i = 0; i < dataArray.length; i += 1) {
//     const imageGroup = [];
//     const imageData = dataArray[i];
//     for (let key in imageData) {
//       const rawImageSource = imageData[key].s.u;
//       const imageSource = rawImageSource.replaceAll('&amp;', '&');
//       imageGroup.push(imageSource);
//     }
//     imageGroups.push(imageGroup);
//   }
//   return imageGroups;
// }
