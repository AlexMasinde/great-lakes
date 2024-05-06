import Link from "next/link";

export default function NewsItem() {
  return (
    <div className="flex justify-between flex-wrap">
      <Link
        href="/single_news"
        className="w-full md:w-[250px] border border-[#f2f2f2] cursor-pointer mb-4 md:mb-2"
      >
        <img
          src="victoria/victoria5.jpeg"
          className="md:w-[250px] md:h-[167px] md:max-h-[167px]"
          style={{ objectFit: "cover" }}
        />
        <div className="px-4 py-4">
          <p className="uppercase text-[#555555] text-xs md:text-sm font-extralight">
            lake edward
          </p>
          <p className="md:text-lg text-semibold my-2">
            Climate change continues to affect fish population in Lake Victoria
          </p>
          <div className="flex items-center font-extralight">
            <div className="mr-1">
              <svg
                height="12"
                viewBox="0 0 21 21"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                  <path
                    d="m2.5.5h12.0269119c1.1045695 0 2 .8954305 2 2v11.9907459c0 1.0543618-.8158778 1.9181651-1.8507376 1.9945143l-.1588615.0054627-12.02691193-.0577246c-1.10080997-.0052835-1.99040087-.8991544-1.99040087-1.999977v-11.9330213c0-1.1045695.8954305-2 2-2z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m.5 4.5h16.027"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4.5" cy="8.5" fill="currentColor" r="1" />
                </g>
              </svg>
            </div>
            <div>
              <p className="uppercase text-xs">2 Feb, 2024</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="/single_news"
        className="w-full md:w-[250px] border border-[#f2f2f2] mb-4 md:mb-2 cursor-pointer"
      >
        <img
          src="victoria/victoria2.jpeg"
          className="md:w-[250px] md:h-[167px] md:max-h-[167px]"
          style={{ objectFit: "cover" }}
        />
        <div className="px-4 py-4">
          <p className="uppercase text-[#555555] text-xs md:text-sm font-extralight">
            lake victoria
          </p>
          <p className="md:text-lg text-semibold my-2">
            New animal species detected along the shores of Lake Victoria
          </p>
          <div className="flex items-center font-extralight">
            <div className="mr-1">
              <svg
                height="12"
                viewBox="0 0 21 21"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                  <path
                    d="m2.5.5h12.0269119c1.1045695 0 2 .8954305 2 2v11.9907459c0 1.0543618-.8158778 1.9181651-1.8507376 1.9945143l-.1588615.0054627-12.02691193-.0577246c-1.10080997-.0052835-1.99040087-.8991544-1.99040087-1.999977v-11.9330213c0-1.1045695.8954305-2 2-2z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m.5 4.5h16.027"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4.5" cy="8.5" fill="currentColor" r="1" />
                </g>
              </svg>
            </div>
            <div>
              <p className="uppercase text-xs">1 Mar, 2024</p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="/single_news"
        className="w-full md:w-[250px] border border-[#f2f2f2] mb-4 md:mb-2 cursor-pointer"
      >
        <img
          src="victoria/victoria6.jpeg"
          className="md:w-[250px] md:h-[167px] md:max-h-[167px]"
          style={{ objectFit: "cover" }}
        />
        <div className="px-4 py-4">
          <p className="uppercase text-[#555555] text-xs md:text-sm font-extralight">
            lake albert
          </p>
          <p className="md:text-lg text-semibold my-2">
            Understanding the complex ecosystem Africa's largest lake
          </p>
          <div className="flex items-center font-extralight">
            <div className="mr-1">
              <svg
                height="12"
                viewBox="0 0 21 21"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                  <path
                    d="m2.5.5h12.0269119c1.1045695 0 2 .8954305 2 2v11.9907459c0 1.0543618-.8158778 1.9181651-1.8507376 1.9945143l-.1588615.0054627-12.02691193-.0577246c-1.10080997-.0052835-1.99040087-.8991544-1.99040087-1.999977v-11.9330213c0-1.1045695.8954305-2 2-2z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m.5 4.5h16.027"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4.5" cy="8.5" fill="currentColor" r="1" />
                </g>
              </svg>
            </div>
            <div>
              <p className="uppercase text-xs">2 Apr, 2024</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-full md:w-[250px] border border-[#f2f2f2] mb-4 md:mb-2 cursor-pointer">
        <img
          src="victoria/victoria8.jpeg"
          className="md:w-[250px] md:h-[167px] md:max-h-[167px]"
          style={{ objectFit: "cover" }}
        />
        <div className="px-4 py-4">
          <p className="uppercase text-[#555555] text-xs md:text-sm font-extralight">
            lake tanganyika
          </p>
          <p className="md:text-lg text-semibold my-2">
            Economic challenges faced by fishermen in Kenya
          </p>
          <div className="flex items-center font-extralight ">
            <div className="mr-1">
              <svg
                height="12"
                viewBox="0 0 21 21"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                  <path
                    d="m2.5.5h12.0269119c1.1045695 0 2 .8954305 2 2v11.9907459c0 1.0543618-.8158778 1.9181651-1.8507376 1.9945143l-.1588615.0054627-12.02691193-.0577246c-1.10080997-.0052835-1.99040087-.8991544-1.99040087-1.999977v-11.9330213c0-1.1045695.8954305-2 2-2z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m.5 4.5h16.027"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4.5" cy="8.5" fill="currentColor" r="1" />
                </g>
              </svg>
            </div>
            <div>
              <p className="uppercase text-xs">1 May, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
