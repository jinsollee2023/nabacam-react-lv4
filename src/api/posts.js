// axios 요청 들어가는 모든 모듈
import axios from "axios";

// 조회
const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data.sort((a, b) => b.id - a.id);
};

// 추가
const addPost = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

// 삭제
const deletePost = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

// 수정
const patchPost = async (newData) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/posts/${newData.id}`, {
    title: newData.title,
    type: newData.type,
    price: newData.price,
    content: newData.content,
  });
};

export { getPosts, addPost, deletePost, patchPost };
