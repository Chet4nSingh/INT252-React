import { LANDING_PAGE_TOPICS } from "../../landing-page-topics";
import Topic from "./Topic";

export default function Topics() {
  return (
    <ul className="flex flex-wrap justify-center gap-8 p-8">
      {LANDING_PAGE_TOPICS.map((topic) => (
        <Topic topic={topic} />
      ))}
    </ul>
  );
}
