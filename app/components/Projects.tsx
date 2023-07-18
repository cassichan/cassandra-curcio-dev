import Image from "next/image";

export default function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">
              My Passion Projects
            </h1>
            <div className="h-1 w-20 bg-teal-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
          Praesent elementum ultricies eros lacinia placerat. Praesent aliquet facilisis enim vel malesuada. Etiam nec lacus dolor. Curabitur sed pulvinar lectus, quis pellentesque ex. Curabitur ultricies dui lacus, et rhoncus nunc tempor quis. Morbi gravida ligula quis lorem tincidunt, eu scelerisque tellus malesuada. In lectus lectus, mattis in magna ut, posuere consequat libero. Vivamus eget vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/../public/Yaizu.jpeg"
                alt="content"
                height={500}
                width={720}
              />
              <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Glimmers
              </h2>
              <p className="leading-relaxed text-base">
              Vivamus eget vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/../public/Yaizu.jpeg"
                alt="content"
                height={500}
                width={720}
              />
              <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chance 4 Petz
              </h2>
              <p className="leading-relaxed text-base">
              Vivamus eget vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/../public/Yaizu.jpeg"
                alt="content"
                height={500}
                width={720}
              />
              <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Love Thy Neighbor
              </h2>
              <p className="leading-relaxed text-base">
              Vivamus eget vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/../public/Yaizu.jpeg"
                alt="content"
                height={500}
                width={720}
              />
              <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Cassie&apos;s Calculator
              </h2>
              <p className="leading-relaxed text-base">
              Vivamus eget vulputate risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
