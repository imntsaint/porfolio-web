import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

/*Gradient Effect */
// return (
//     <>
//       <div className="fixed inset-0 flex justify-center sm:px-8 relative pt-8 overflow-x-hidden">
//         <div className="container">
//           {/*Gradient Effect */}
//           <div className="absolute top-56 xl:top-64 transition-all left-8 md:left-20 rotate-[35deg]">
//             <div className="relative flex flex-col">
//               <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-blue-400 to-blue-400 dark:from-blue-500 dark:to-blue-500"></div>
//               <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-purple-400 dark:from-blue-700 dark:to-sky-800 to-purple-400 "></div>
//               <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-cyan-200 dark:from-purple-700 dark:to-purple-700 to-cyan-200 "></div>
//               <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-red-200 to-red-200 dark:from-fuchsia-700 dark:to-fuchsia-700"></div>
//             </div>
//           </div>
//           <div className="py-10 relative z-10 bg-opacity-50 dark:bg-opacity-70 backdrop-blur-2xl bg-white dark:bg-woodsmoke-900 rounded-2xl px-10 md:px-20 border dark:border-woodsmoke-800">
//             <Header />
//             <main className="py-6 relative z-10">
//               <Component {...pageProps} />
//             </main>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </>
//   );

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />

        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
