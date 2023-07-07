// axios 요청 들어가는 모든 모듈
import axios from "axios";

// 조회
const getPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts");
  return response.data;
};

// 추가
const addPost = async (newPost) => {
  await axios.post("http://localhost:4000/posts", newPost);
};

// 삭제
const deletePost = async (id) => {
  await axios.delete(`http://localhost:4000/posts/${id}`);
};

// 수정
const patchPost = async (newData) => {
  await axios.patch(`http://localhost:4000/posts/${newData.id}`, {
    title: newData.title,
    type: newData.type,
    price: newData.price,
    content: newData.content,
  });
};

export { getPosts, addPost, deletePost, patchPost };
