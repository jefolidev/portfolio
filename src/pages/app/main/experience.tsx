import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwipeable } from "react-swipeable";
import { JobCard } from "../../../components/jobs-cards";
import { jobs } from "../../utils/experience/jobs";

export function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : jobs.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < jobs.length - 1 ? prev + 1 : 0));
  };


  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true, // permite swipe com mouse também
  });


 return (
    <div  {...handlers} className="flex min-h-screen flex-col items-center justify-center bg-lightPrimary dark:bg-primary px-4 py-10 select-none">
      <h1 className="font-geologica text-4xl sm:text-5xl font-bold text-lightFonts dark:text-white mb-4">
        Minhas experiências
      </h1>
      <p className="text-lightSubtitles dark:text-gray-300 text-center max-w-xl mb-10">
        Veja como atuei em vagas passadas e cheque algumas curiosidades em que já coloquei a mão na massa!
      </p>

      {/* Carrossel */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Seta esquerda */}
        <button
          onClick={goToPrev}
          className="hidden sm:block absolute left-0 z-10 p-2 rounded-full bg-white dark:bg-zinc-800 shadow hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
        >
          <BiChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>

        {/* Card central */}
        <div className="w-full h-[420px] flex items-center justify-center transition-all duration-300 ease-in-out">

          <JobCard.Root role={jobs[currentIndex].role} year={jobs[currentIndex].year}>
            <JobCard.Header {...jobs[currentIndex].header} />
            <JobCard.Content {...jobs[currentIndex].content} />
            <JobCard.Footer {...jobs[currentIndex].footer}>
              {jobs[currentIndex].footer.stack}
            </JobCard.Footer>
          </JobCard.Root>
        </div>

        {/* Seta direita */}
        <button
          onClick={goToNext}
          className="hidden sm:block absolute right-0 z-10 p-2 rounded-full bg-white dark:bg-zinc-800 shadow hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
        >
          <BiChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>

      {/* Indicadores (bolinhas) */}
      <div className="flex gap-2 mt-6">
        {jobs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-primary dark:bg-lightPrimary"
                : "bg-gray-400 dark:bg-gray-600"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}