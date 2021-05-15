const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '상상 더하기 - 라붐',
    body: '상상에 상상에 상상을 더해서~♪'
  },
  {
    id: 2,
    title: '상상 더하기 - 라붐',
    body: 'oh hello new world~♪'
  },
  {
    id: 3,
    title: '상상 더하기 - 라붐',
    body: '지금 나와~♪'
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
}