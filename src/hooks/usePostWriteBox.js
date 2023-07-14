import { useNavigate } from "react-router-dom";
import usePosts from "./usePostsQueries";
import useInput from "./usePostInput";

const addCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const removeCommas = (value) => {
  return value.replace(/,/g, "");
};

const usePostWriteBox = (initialState) => {
  const [title, changeTitle] = useInput(initialState ? initialState.title : "");

  const [type, changeType] = useInput(
    initialState ? initialState.type : "goodItem"
  );

  const [price, changePrice] = useInput(
    initialState ? addCommas(initialState.price) : null,
    "price"
  );

  const [content, changeContent] = useInput(
    initialState ? initialState.content : null,
    "content"
  );

  const navigate = useNavigate();
  const { mutationAdd, mutationUpdate } = usePosts();

  const addPost = (e) => {
    e.preventDefault();
    if (title && type && price && content) {
      const newPost = {
        title,
        type,
        price: Number(removeCommas(price)),
        content,
      };
      mutationAdd.mutate(newPost);
      navigate("/home");
    } else alert("모든 항목을 작성해주세요!");
  };

  const editPost = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: initialState.id,
      title,
      type,
      price: Number(removeCommas(price)),
      content,
    };
    mutationUpdate.mutate(updatedPost);
    navigate(`/post/${initialState.id}`);
  };

  return {
    title,
    changeTitle,
    type,
    changeType,
    price,
    changePrice,
    content,
    changeContent,
    addPost,
    editPost,
  };
};

export default usePostWriteBox;
