import Image from './Image'

export default function Example() {
  const source = '/static/images/marine-with-flag.png'
  const alt = 'Marine with flag'
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
          <div className="px-6 lg:px-0 lg:pt-4">
            <h1 className="hidden sm:block py-5 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Sol Defense Corps
            </h1>
            <h3 className="py-5 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
              The Journal of Military Science Fiction
            </h3>
            <p>
              Welcome to Sol Defense Corps! Your frontline outpost in the theater of military
              science fiction.
            </p>
            <br />
            <p>Here, we review the latest novels, video games, movies, comics and holo-media.</p>
            <br />
            <p>
              {' '}
              Whether you’re a grizzled veteran of interstellar campaigns or a butter-bar cadet
              hungry for your first taste of powered armor combat, SDC delivers mission-critical
              intel with laser precision.
            </p>
            <br />
            <p>Welcome to the fight.</p>
            <br />
            <p>Solis Supra Omnia!</p>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl">
              <Image src={source} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
