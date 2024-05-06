import CommonPageHeader from "@/components/commonPageHeader";
import Footer from "@/components/footer";

export default function EventPage() {
  return (
    <div>
      <CommonPageHeader title="Upcoming Event" />
      <div className="container mx-auto py-8">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-light mb-4">
              Exploring the Wonders of Lake Victoria
            </h2>
            <div className="flex items-center ">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 15.523 2 10zm10-8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1 12a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Date: July 22, 2024</p>
            </div>
            <div className="flex items-center  mt-2">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 15.523 2 10zm10-8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1 12a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Time: 6:00 PM onwards</p>
            </div>
            <p className="mt-4 font-extralight">
              Embark on an unforgettable journey to explore the wonders of Lake
              Victoria, the largest lake in Africa. Join us for a day filled
              with adventure, learning, and discovery as we delve into the rich
              history, culture, and ecology of this magnificent waterbody.
            </p>
            <p className="mt-4 font-extralight">
              Our guided tour will take you to various points of interest around
              Lake Victoria, including fishing villages, wildlife reserves, and
              historical sites. Learn about the diverse flora and fauna that
              call the lake home, and hear stories from local experts about the
              significance of this vital resource.
            </p>
            <p className="mt-4 font-extralight">
              Tickets are available now, and we encourage you to reserve your
              spot early as space is limited. Whether you're a nature
              enthusiast, history buff, or simply curious about the world around
              you, this event is sure to leave you with a deeper appreciation
              for the beauty and importance of Lake Victoria.
            </p>
            <p className="mt-4 font-extralight">
              Location: Lake Victoria Visitors Center, Kisumu, Kenya
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
