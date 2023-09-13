import { Link } from '@remix-run/react'

function BlogCard({ slug, title, description, image, date }) {
  return (
    <li className='blog-card' key={slug}>
      <Link to={slug} className='card-img-a'>
        <img className='card-img' src={image.src} alt={image.alt} />
      </ Link>
      <Link to={slug} >
        <div className='blog-card-content'>
          <div className='blog-card-title'>{title}</div>
          <p className='blog-card-date'>{date}</p>
          <p className='blog-card-p'>{description}</p>
        </div>
      </ Link>
    </li>
  )
}

export default BlogCard
