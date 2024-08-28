import { useContext } from "react";
import { LANDING_PAGE_TOPICS } from "../landing-page-topics";
import Topic from "./Topic";
import TopicModal from "./TopicModal";
import LandingPageContext from "../store/LandingPageContext";

export default function Topics() {
  const { selectedTopic } = useContext(LandingPageContext);
  return (
    <>
      <TopicModal topic={selectedTopic} open={selectedTopic} />
      <ul className="mx-auto my-8 w-[90%] grid grid-cols-3 gap-8">
        {LANDING_PAGE_TOPICS.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </ul>
    </>
  );
}
