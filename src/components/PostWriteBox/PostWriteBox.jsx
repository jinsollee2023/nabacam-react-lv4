import React from "react";
import { styled } from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import Button from "../common/Button/Button";
import usePostWriteBox from "../../hooks/usePostWriteBox";
import "./postWriteBox.css";

const PostWriteBox = ({ filteredPost }) => {
  const {
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
  } = usePostWriteBox(filteredPost);

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
              .post(`${process.env.REACT_APP_SERVER_URL}/images`, imgFile)
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
              changeType(e);
            }}
            value={type}
          >
            <option value="goodItem">잘산템</option>
            <option value="badItem">못산템</option>
          </S.TypeSelect>
          <S.TitleInput
            value={title}
            placeholder="title"
            onChange={(e) => {
              changeTitle(e);
            }}
          />
          <S.PriceInput
            value={price}
            placeholder="price"
            onChange={(e) => {
              changePrice(e);
            }}
          />
          <span>원</span>
        </S.MainInfoContainer>

        <CKEditor
          editor={ClassicEditor}
          data={content}
          config={{ extraPlugins: [uploadPlugin] }}
          onChange={(event, editor) => {
            const data = editor.getData();
            changeContent(event, data);
          }}
        />
        <S.BtnContainer>
          <Button
            onClick={filteredPost ? editPost : addPost}
            title={filteredPost ? "수정" : "등록"}
            type={"write"}
          />
        </S.BtnContainer>
      </div>
    </div>
  );
};

export default PostWriteBox;

const S = {
  MainInfoContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  TypeSelect: styled.select`
    width: 15%;
    height: 55px;
  `,
  TitleInput: styled.input`
    width: 60%;
    height: 50px;
    margin: 10px;
  `,
  PriceInput: styled.input`
    width: 20%;
    height: 50px;
    margin-right: 5px;
  `,
  BtnContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
};
