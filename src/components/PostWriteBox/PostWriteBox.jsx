import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addPost, patchPost } from "../../api/posts";
import { styled } from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { useNavigate } from "react-router-dom";

const PostWriteBox = ({ post }) => {
  console.log("post", post);
  // 여기
  const [title, setTilte] = useState(post ? post.title : "");
  const [type, setType] = useState(post ? post.type : "goodItem");
  const [price, setPrice] = useState(post ? post.price : null);
  const [content, setContent] = useState(post ? post.content : "");

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // 여기
  const addMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      alert("등록 완료!!!");
    },
  });

  const updateMutation = useMutation(patchPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      alert("수정 성공!");
    },
  });

  // 여기
  const addBtnHandler = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      type,
      price,
      content,
    };
    addMutation.mutate(newPost);
    navigate("/");
  };

  const EditBtnHandler = (e) => {
    e.preventDefault();
    const updatedPost = { id: post.id, title, type, price, content };
    updateMutation.mutate(updatedPost);
    navigate(`/post/${post.id}`);
  };

  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          loader.file.then(async (file) => {
            const imageRef = ref(storage, `${file.name}`);
            await uploadBytes(imageRef, file);
            const downloadURL = await getDownloadURL(imageRef);
            const imgFile = { imgURL: downloadURL };

            axios
              .post("http://localhost:4000/images", imgFile)
              .then((res) => {
                resolve({
                  default: res.data.imgURL,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <div>
      <div>
        <S.MainInfoContainer>
          <S.TypeSelect
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="goodItem">잘산템</option>
            <option value="badItem">못산템</option>
          </S.TypeSelect>
          <S.TitleInput
            value={title}
            placeholder="title"
            onChange={(e) => {
              setTilte(e.target.value);
            }}
          />
          <S.PriceInput
            value={price}
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </S.MainInfoContainer>

        <CKEditor
          editor={ClassicEditor}
          data={post ? content : ""}
          config={{ extraPlugins: [uploadPlugin] }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent(data);
          }}
        />
        <button onClick={post ? EditBtnHandler : addBtnHandler}>
          {post ? "수정" : "등록"}
        </button>
      </div>
    </div>
  );
};

export default PostWriteBox;

const S = {
  WriteForm: styled.form``,
  MainInfoContainer: styled.div`
    width: 100%;
  `,
  TypeSelect: styled.select`
    width: 10%;
    height: 50px;
  `,
  TitleInput: styled.input`
    width: 50%;
    height: 50px;

    margin: 2%;
  `,
  PriceInput: styled.input`
    width: 15%;
    height: 50px;
  `,
};
