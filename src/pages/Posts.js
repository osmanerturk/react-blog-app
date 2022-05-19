import React from 'react'
import { selectCats } from '../redux/slices/categorySlice'
import { useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom';
function Posts() {
const cats = useSelector(selectCats)
    

    
  return (
      
    <div className='grid grid-cols-3'>
        {cats.map((cat) =>
        <ul key={cat.id}>
            <li>
                <div  className="flex gap-5 ml-5 mr-5 mt-10 cursor-pointer">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cat.name}</h2>
                <p>Number of Post : {cat.posts.length}</p>
              </div>
            </div>
          </div>
            </li>
        </ul>
          
        )}
    </div>
  )
}

export default Posts