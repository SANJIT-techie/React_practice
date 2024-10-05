import React from 'react'

const Card = ({userName = "HC", post = "not assigned yet"}) => {
    // console.log(props);
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 flex">
            <img src="https://media.istockphoto.com/id/2060794749/photo/the-beauty-of-road-on-the-hills-of-lansdowne-with-deodar-trees-pine-trees-on-the-side-of.jpg?b=1&s=612x612&w=0&k=20&c=nHDEjKOpv9oKI3RErpx-KsB9yfP7ALHqgxyWEIIBldg=" alt="" className="rounded-lg" width="384" height="512" />
            <div className="pt-20 space-y-4 ml-6">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tenetur.
                    </p>
                </blockquote>
                <figcaption className="font-medium left-1">
                    <div>
                       {userName} 
                    </div>
                    <div>
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card