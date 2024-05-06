import shortid from "shortid";

export default function DescriptionSection({ descriptionArray }) {
  return (
    <>
      {descriptionArray.map((description) => {
        return (
          <p
            className="text-base leading-8 mb-8 font-extralight"
            key={shortid()}
          >
            {description}
          </p>
        );
      })}
    </>
  );
}
