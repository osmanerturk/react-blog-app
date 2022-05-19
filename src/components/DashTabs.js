import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  delAsyncCat,
  postAsyncPostList,
  selectPosts,
  delAsyncPost,
} from "../redux/slices/categorySlice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.category.catPost);

  const handleDelCat = (id) => {
    dispatch(delAsyncCat(id));
  };
  const handleDelPost = (id) => {
    dispatch(delAsyncPost(id));
  };

  const posts = useSelector(selectPosts);
  React.useEffect(() => {
    dispatch(postAsyncPostList());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Categories" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              {cats.map((cat) => (
                <tr key={cat.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12"></div>
                      </div>
                      <div>
                        <div className="font-bold">{cat.name}</div>
                        <div className="text-sm opacity-50">id:{cat.id}</div>
                      </div>
                    </div>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">edit</button>
                    <button
                      onClick={() => handleDelCat(cat.id)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>file</th>
                <th>category</th>
                <th>caption</th>
                <th></th>
              </tr>
            </thead>
            {posts.map((post) => (
              <tbody key={post.id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{post.title}</div>
                        <div className="text-sm opacity-50">{post.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {post.category.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>{post.caption}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">edit</button>
                    <button className="btn btn-ghost btn-xs">remove</button>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={()=>handleDelPost(post.id)}
                    >
                      delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </TabPanel>
    </Box>
  );
}
