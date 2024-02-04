import AltText from '../components/AltText'
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='main-text'>
        <h1><span>Jonathan</span>Cardona Ramírez</h1>
        <AltText />
      </div>
      <div className='person'>
        <div className='person-container'>
          <Image
            className='person-img' src='/assets/jonathan.webp' alt='Jonathan Cardona portrait photo'
            width='350' height='500'
            decoding='async'
          />
          <Image
            className='person-circle' src='/assets/texture.webp' alt='Geometric texture'
            decoding='async'
            width='350' height='500'
          />
        </div>
      </div>
    </div>
  );
}
