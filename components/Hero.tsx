import Image from './Image'

export default function Example() {
  const source = '/static/images/marine-with-flag.png'
  const alt = 'Marine with flag'
  return (
    // <div className="divide-y divide-gray-200 dark:divide-gray-700">
    //   <div className="relative isolate overflow-hidden">
    //     <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
    //       <div className="px-6 lg:px-0 lg:pt-4">
    //         <h1 className="hidden sm:block py-5 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
    //           SOL DEFENSE CORPS
    //         </h1>
    //         <h3 className="py-5 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
    //           The Journal of Military Science Fiction
    //         </h3>
    //         <p>
    //           Welcome to Sol Defense Corps! Your frontline outpost in the theater of military
    //           science fiction.
    //         </p>
    //         <br />
    //         <p>Here, we review the latest novels, video games, movies, comics and holo-media.</p>
    //         <br />
    //         <p>
    //           {' '}
    //           Whether you’re a grizzled veteran of interstellar campaigns or a butter-bar cadet
    //           hungry for your first taste of powered armor combat, SDC delivers mission-critical
    //           intel with laser precision.
    //         </p>
    //         <br />
    //         <p>Welcome to the fight.</p>
    //         <br />
    //         <p>Solis Supra Omnia!</p>
    //       </div>
    //       <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
    //         <div className="shadow-lg md:rounded-3xl">
    //           <Image src={source} alt={alt} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover"
      /> */}
      <Image src={source} alt={alt} className="absolute inset-0 -z-10 size-full object-cover"/>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">SOL DEFENSE CORPS</h1>
         <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
          Welcome to Sol Defense Corps! Your frontline outpost in the theater of military
          science fiction.
        </p>
        <br />
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">Here, we review the latest novels, video games, movies, comics and holo-media.</p>
        <br />
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
          Whether you’re a grizzled veteran of interstellar campaigns or a butter-bar cadet
          hungry for your first taste of powered armor combat, SDC delivers mission-critical
          intel with laser precision.
        </p>
        <br />
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">Welcome to the fight.</p>
        <br />
        <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">Solis Supra Omnia!</p>
      </div>
    </div>

  )
}