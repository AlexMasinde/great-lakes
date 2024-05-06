import { useState } from "react";
import { motion } from "framer-motion";
import { LakeDetailsNavigation } from "./lakeDetailsNavigation";
import LakeDetailsDescription from "./lakeDetailsDescription";
import Gallery from "./lakeGallery";
import LakeMap from "./lakeMap";
import LakeQuickFacts from "./lakeQuickFacts";
import LakeJournalArticles from "./lakeJournalArticles";
import LakeCulturalSignificance from "./lakeCulturalSignificance";

export default function LakeDetails({ lakeData }) {
  const [selectedTab, setSelectedTab] = useState("description");
  const [selectedSummary, setSelectedSummary] = useState(
    "Bio-physical and demographic characteristics"
  );

  if (!lakeData) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p>Loading....</p>
      </div>
    );
  }

  const {
    name,
    slug,
    culturalSignificance,
    countries,
    biophysicalCharacteristicsSummary,
    valuesAndInvestmentOpportunitiesSummary,
    ecologicalAndEconomicConcernsSummary,
    governanceSummary,
    shortDescription,
    potentialSustainableDevelopmentInterventionsSummary,
    mainDescription,
    biophysicalCharacteristics,
    valuesAndInvestmentOpportunities,
    ecologicalAndEconomicConcerns,
    governance,
    requiredInterventions,
    longitude,
    latitude,
  } = lakeData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-5 border-l-2 border-[#ffcc00] pl-3">
        <p className="md:text-2xl font-extralight">
          {name} - {countries}
        </p>
      </div>
      <div className="mt-4">
        <p className="font-light">{shortDescription}</p>
        <p className="mt-4 font-extralight">{mainDescription}</p>
      </div>

      <div className=" mt-5 border-t border-b border-dotted pt-4">
        <div className="flex justify-between flex-wrap">
          <div className="md:mr-10 md:flex-1">
            <LakeQuickFacts
              characteristics={biophysicalCharacteristicsSummary}
              title="Bio-physical and demographic characteristics"
              selectedSummary={selectedSummary}
              setSelectedSummary={setSelectedSummary}
            />
            <LakeQuickFacts
              characteristics={valuesAndInvestmentOpportunitiesSummary}
              title="Values and investment opportunities"
              selectedSummary={selectedSummary}
              setSelectedSummary={setSelectedSummary}
            />
            <LakeQuickFacts
              characteristics={ecologicalAndEconomicConcernsSummary}
              title="Ecological and economic concerns"
              selectedSummary={selectedSummary}
              setSelectedSummary={setSelectedSummary}
            />
            <LakeQuickFacts
              characteristics={governanceSummary}
              title="Governance"
              selectedSummary={selectedSummary}
              setSelectedSummary={setSelectedSummary}
            />
            <div className="mb-10 md:mb-0">
              <LakeQuickFacts
                characteristics={
                  potentialSustainableDevelopmentInterventionsSummary
                }
                title="Potential sustainable development interventions"
                selectedSummary={selectedSummary}
                setSelectedSummary={setSelectedSummary}
              />
            </div>
          </div>
          <div className=" w-full md:flex-1">
            <LakeMap longitude={longitude} latitude={latitude} />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <LakeDetailsNavigation
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      </div>
      <motion.div
        key="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedTab === "description" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: selectedTab === "description" ? "block" : "none" }}
      >
        <LakeDetailsDescription
          biophysicalCharacteristics={biophysicalCharacteristics}
          governance={governance}
          requiredInterventions={requiredInterventions}
          valuesAndInvestmentOpportunities={valuesAndInvestmentOpportunities}
          ecologicalAndEconomicConcerns={ecologicalAndEconomicConcerns}
        />
      </motion.div>
      <motion.div
        key="articles"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedTab === "articles" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: selectedTab === "articles" ? "block" : "none" }}
      >
        <LakeJournalArticles slug={slug} />
      </motion.div>
      <motion.div
        key="gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedTab === "gallery" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: selectedTab === "gallery" ? "block" : "none" }}
      >
        <Gallery />
      </motion.div>
      <motion.div
        key="culture"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedTab === "culture" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: selectedTab === "culture" ? "block" : "none" }}
      >
        <LakeCulturalSignificance culturalSignificance={culturalSignificance} />
      </motion.div>
    </div>
  );
}
