import Button from './Button';

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <section id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 text-blue-50 flex justify-center items-center'>
        <div className='absolute left-20 top-0 hidden h-full w-72  sm:block lg:left-20 lg:w-96'>
          <ImageClipBox
            clipClass='contact-clip-path-1 absolute -left-20 -top-10'
            src='https://www.dropbox.com/scl/fi/zycx8kb1bpbo23jppy21w/contact-1.webp?rlkey=i07368cl6f8c6knhirskfb234&st=v77dumf1&dl=1'
          />
          <ImageClipBox
            clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60 absolute -left-20 bottom-20'
            src='https://www.dropbox.com/scl/fi/rlnm39quur5ybeg6fzoh1/contact-2.webp?rlkey=q7f0nl1u5rr0dduadvdbic9i0&st=r6xn3nh9&dl=1'
          />
        </div>

        <div className='absolute top-40 left-20 z-[2000] w-70 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
          <ImageClipBox
            clipClass='absolute md:scale-125 absolute -top-20'
            src='https://www.dropbox.com/scl/fi/gl8x05hxfdeb6ef0e965n/swordman-partial.webp?rlkey=35erhfdyv17vxg33z1ph513fy&st=penpsj1y&dl=1'
          />
          <ImageClipBox
            clipClass='sword-man-clip-path md:scale-125 absolute -top-20'
            src='https://www.dropbox.com/scl/fi/2t2kj6441u8wlaop9s0eu/swordman.webp?rlkey=aywcodjg45z2qomv5v4w2e5wn&st=lrjmqn1s&dl=1'
          />
        </div>

        <div className='w-[50%] flex flex-col items-center text-center'>
          <p className='font-general text-[20px] uppercase'>Join Zentry</p>
          <h1 className='special-font mt-10 w-full font-zentry leading-[0.9] md:text-[6rem]'>
            Let&apos;s b<b>u</b>ild the <br /> <b>n</b>ew era o<b>f</b> g
            <b>a</b>ming t<b>o</b>gether
          </h1>
          <Button title='contact us' containerClass='mt-10 cursor-pointer' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
