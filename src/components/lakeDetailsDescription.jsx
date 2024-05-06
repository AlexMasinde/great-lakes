import DescriptionSection from "./lakeDescriptionSection";

export default function LakeDetailsDescription({
  biophysicalCharacteristics,
  governance,
  requiredInterventions,
  valuesAndInvestmentOpportunities,
  ecologicalAndEconomicConcerns,
}) {
  return (
    <div className="mt-4">
      <div>
        <p className="text-md mb-4">
          Bio-physical and Demographic Characteristics
        </p>
        <DescriptionSection descriptionArray={biophysicalCharacteristics} />
      </div>
      <div>
        <p className="text-md mb-4">Values and Investment Opportunities</p>
        <DescriptionSection
          descriptionArray={valuesAndInvestmentOpportunities}
        />
      </div>
      <div>
        <p className="text-md mb-4">Ecological and Economic Concerns</p>
        <DescriptionSection descriptionArray={ecologicalAndEconomicConcerns} />
      </div>
      <div>
        <p className="text-md mb-4">Governance</p>
        <DescriptionSection descriptionArray={governance} />
      </div>
      <div>
        <p className="text-md mb-4">Required Interventions</p>
        <DescriptionSection descriptionArray={requiredInterventions} />
      </div>
    </div>
  );
}
