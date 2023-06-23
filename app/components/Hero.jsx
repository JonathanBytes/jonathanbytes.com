import AltText from '../components/AltText'

export default function Hero(){
  return(
      <div className='hero'>
        <div className='main-text'>
          <h1><span>Jonathan</span>Cardona Ramírez</h1>
          <AltText />
        </div>
        <div className='person'>
          <div className='person-container'>
            <img
              className='person-img' src='/assets/jonathan.png' alt='Jonathan Cardona portrait photo'
              decoding='async'
            />
            <img className='person-circle' src='/assets/texture2.png' alt='' decoding='async' />
          </div>
        </div>
      </div>
  );
}
