import { Link } from '@remix-run/react'

function BlogCard ({ slug, title, description, image }) {
  return (
    <li className='blog-card' key={slug}>
      <Link to={slug} className='card-img-a'>
        <img className='card-img' src={ image.src } alt={ image.alt } />
      </ Link>
      <div className='blog-card-content'>
        <Link className='blog-card-title' to={slug} >
          {title}
        </ Link>
        <Link to={slug} >
          <p className='blog-card-p'>{description}</p>
        </ Link>
      </div>
    </li>
  )
}

export default BlogCard
