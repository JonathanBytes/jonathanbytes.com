function PostBanner ({ image }) {
  console.log(image)
  return (
    <img className='post-banner' src={ image.src } alt={ image.alt }/>
  )
}

export default PostBanner
