import { Link } from '@remix-run/react'

function BlogCard({ slug, title, description, image, date }) {
  return (
    <li className='blog-card' key={slug}>
      <Link to={slug} className='card-img-a'>
        <img className='card-img' src={image.src} alt={image.alt} />
      </ Link>
      <div className='blog-card-content'>
        <div className='blog-card-tida'>
          <Link className='blog-card-title' to={slug} >
            {title}
          </ Link>
          <p className='blog-card-date'>{date}</p>
        </div>
        <Link to={slug} >
          <p className='blog-card-p'>{description}</p>
        </ Link>
      </div>
    </li>
  )
}

export default BlogCard
