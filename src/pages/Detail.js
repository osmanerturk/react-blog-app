import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncCatList } from "../redux/slices/categorySlice";
function Detail() {
  const cats = useSelector((state) => state.category.catPost);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(postAsyncCatList());
  },[]);

  const { title } = useParams();
  
  const selected = cats.find((cat) => (cat.id == title ? cat.posts : ""));
  const post = selected.posts;
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>Posts</li>
          <li>{selected.name}</li>
          <li>{selected.name}'s Detail</li>
        </ul>
      </div>
      {post.map((post) => (
        <ul>
          <li key={post.id}>
            <div className="flex flex-col justify-center">
              <img
                className="p-7 w-max m-auto"
                src={'http://localhost:1076' + post.imgPath}
                alt={post.title}
              />
              <h1 className="text-center font-bold">{post.caption}</h1>
              <p className="p-3">{post.updateAt}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Detail;
