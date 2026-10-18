import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]" >
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-12 text-center">
            We are the most reliable and secure URL shortener in the market. We provide a simple and easy to use interface for shortening your URLs. Our service is free and we do not require any registration.
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten" className='font-bold bg-purple-500 rounded-lg shadow-lg py-1 p-3 text-white' ><button>Try Now</button></Link>
            <Link href="/github" className='font-bold bg-purple-500 rounded-lg shadow-lg py-1 p-3 text-white' ><button>Github</button></Link>
          </div>
        </div>
        <div className="relative flex justify-start">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
