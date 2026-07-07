import Presentation from "@/components/Presentation";
import CoverSlide from "@/components/slides/CoverSlide";
import WhatIsItSlide from "@/components/slides/WhatIsItSlide";
import MembersSlide from "@/components/slides/MembersSlide";
import ObjectivesSlide from "@/components/slides/ObjectivesSlide";
import BenefitsSlide from "@/components/slides/BenefitsSlide";
import TrueFalseSlide from "@/components/slides/TrueFalseSlide";
import MultipleChoiceSlide from "@/components/slides/MultipleChoiceSlide";
import ImportanceSlide from "@/components/slides/ImportanceSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import QuestionSlide from "@/components/slides/QuestionSlide";

export default function Home() {
  const slides = [
    <CoverSlide key="cover" />,
    <WhatIsItSlide key="what-is-it" />,
    <MembersSlide key="members" />,
    <ObjectivesSlide key="objectives" />,
    <BenefitsSlide key="benefits" />,
    <TrueFalseSlide key="tf" />,
    <MultipleChoiceSlide key="mc" />,
    <ImportanceSlide key="importance" />,
    <ConclusionSlide key="conclusion" />,
    <QuestionSlide key="question" />,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Presentation slides={slides} />
    </main>
  );
}
