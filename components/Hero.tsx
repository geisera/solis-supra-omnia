import Image from "./Image"

export default function Example() {
  const source = '/static/images/marine-with-flag.png'
  const alt = 'Marine with flag'
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-10">
          <div className="px-6 lg:px-0 lg:pt-4">
            <h1 className="hidden h-6 text-3xl font-semibold sm:block">
              Sol Defense Corps
            </h1>
            <h3 className="py-5 text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-10 md:text-2xl md:leading-14">
              The Journal of Military Science Fiction
            </h3>
            <p>Welcome to Sol Defense Corps! Your frontline outpost in the theater of military science fiction.</p>
            <br />
            <p>Here, we review the latest novels, video games, movies, comics and holo-media.</p>
            <br />
            <p> Whether you’re a grizzled veteran of interstellar campaigns or a butter-bar cadet hungry for your first taste of powered armor lore, SDC delivers mission-critical intel with laser precision.</p>
            <br />
            <p>Strap in, calibrate your targeting arrays, and prepare for a deep dive into the tactics, technology, and terrain of today's best science fiction.</p>
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