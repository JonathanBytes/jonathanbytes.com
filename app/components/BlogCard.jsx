import { Link } from "@remix-run/react"

function BlogCard( {slug, title, description, image, } ) {
  return (
    <li className='blog-card' key={slug}>
      <img className='card-img' src={ image.src } alt={ image.alt } />
      <div>
        <Link to={slug} > {title} </ Link>  
        <p>{description}</p>
      </div>
    </li>
  )
}

export default BlogCard
