export default function Gallery() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria4.jpeg" date="Nov, 2023" />
        <ImageThumbnail src="/victoria/victoria5.jpeg" date="April, 2021" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria6.jpeg" date="Jan, 2008" />
        <ImageThumbnail src="/victoria/victoria7.jpeg" date="Feb, 2020" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria4.jpeg" date="Nov, 2023" />
        <ImageThumbnail src="/victoria/victoria5.jpeg" date="April, 2021" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria6.jpeg" date="Jan, 2008" />
        <ImageThumbnail src="/victoria/victoria7.jpeg" date="Feb, 2020" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria10.jpeg" date="Jan, 2008" />
        <ImageThumbnail src="/victoria/victoria11.jpeg" date="Feb, 2020" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria1.jpeg" date="Jan, 2008" />
        <ImageThumbnail src="/victoria/victoria2.jpeg" date="Feb, 2020" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria4.jpeg" date="Nov, 2023" />
        <ImageThumbnail src="/victoria/victoria5.jpeg" date="April, 2021" />
      </div>
      <div className="flex flex-col">
        <ImageThumbnail src="/victoria/victoria6.jpeg" date="Jan, 2008" />
        <ImageThumbnail src="/victoria/victoria7.jpeg" date="Feb, 2020" />
      </div>
    </div>
  );
}

function ImageThumbnail({ src, date }) {
  return (
    <div className="border border-[#f2f2f2] mb-4">
      <img src={src} className="w-full" alt="Test Image" />
      <div className="px-2 py-2">
        <p className="text-sm font-extralight italic">{date}</p>
      </div>
    </div>
  );
}
