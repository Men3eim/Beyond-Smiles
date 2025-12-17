"use client";

import { useState } from "react";
import { PremiumFeatureBadges } from "./premium-feature-badges";
import { PremiumFeatureModal } from "./premium-feature-modal";

export function PremiumFeaturesWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<"virtual" | "sameday" | null>(null);

  const handleOpenModal = (feature: "virtual" | "sameday") => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <>
      <PremiumFeatureBadges onOpenModal={handleOpenModal} />
      <PremiumFeatureModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        feature={selectedFeature}
      />
    </>
  );
}
