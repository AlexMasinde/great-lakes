import DescriptionSection from "./lakeDescriptionSection";

export default function LakeCulturalSignificance({ culturalSignificance }) {
  return (
    <div className="mt-4">
      <p className="text-md mb-4">Cultural Signifiance</p>
      <DescriptionSection descriptionArray={culturalSignificance} />
    </div>
  );
}
