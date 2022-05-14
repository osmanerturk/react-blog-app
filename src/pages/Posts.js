import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncCatList } from "../redux/slices/categorySlice";
function ReactPage() {
  const cats = useSelector((state) => state.category.catPost);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(postAsyncCatList());
  });

  const { category_id } = useParams();
  
  const selected = cats.find((cat) => (cat.id == category_id ? cat.id : ""));


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/posts/${selected.name}/${category_id}/${selected.id}/1`;
    navigate(path);
  };

  return (
    <div>
      <div class="text-sm breadcrumbs">
        <ul>
          <li>Posts</li>
          <li>{selected.name}</li>
        </ul>
      </div>
      {cats.map((cat) =>
        cat.id == category_id ? (
          <div className="flex gap-5 ml-5 mr-5 mt-10 cursor-pointer">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  onClick={routeChange}
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cat.name}</h2>
                <p>{cat.posts[0].title}</p>
                <div className="card-actions justify-end">
                  <button onClick={routeChange} className="btn btn-primary">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default ReactPage;
