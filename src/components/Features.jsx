import { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className='relative size-full'>
      <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
      />
      <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
          {description && (
            <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>
            Into the Metagame Layer
          </p>

          <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world
          </p>
        </div>

        <BentoTilt className='border-hsla relative mb-7 h-97 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard
            src='https://www.dropbox.com/scl/fi/vgf29nx08m08vlfutse5k/feature-1.mp4?rlkey=jyea6fq8pc6hnfnwkbti779c2&st=6rwjy3ut&dl=1'
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description='A cross-platform metagame app, turing your activities accross Web2 and Web3 games into a rewarding adventure.'
          />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 '>
            <BentoCard
              src='https://www.dropbox.com/scl/fi/orhm9xpl53x68hp4fr8ph/feature-2.mp4?rlkey=yan6q8rj0rbqui361b61y8l8a&st=rxvxlj3o&dl=1'
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard
              src='https://www.dropbox.com/scl/fi/udb0o3xs3y9gwrtvrfi79/feature-3.mp4?rlkey=4shu0f6fkbm5vza57kqwy7c2n&st=e7t55fd1&dl=1'
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description='A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard
              src='https://www.dropbox.com/scl/fi/v97fb1fzebas5p6tqcgxa/feature-4.mp4?rlkey=jfcdccui8ibw2e576ykpstba5&st=7cajt1vw&dl=1'
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description='A cross-world AI Agent - elevating your gameplay to be more fun and productive.'
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
              <h1 className='bento-title special-font max-w-64 text-black'>
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className='m-5 scale-[5] self-end' />
            </div>
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
            <video
              src='https://www.dropbox.com/scl/fi/b5n8nzdp6t2h2qghplti4/feature-5.mp4?rlkey=r1ereelvyj21orm2fhm1amjyi&st=zcs0buex&dl=1'
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
