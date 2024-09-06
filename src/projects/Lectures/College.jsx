import University from "./University";

export default function College() {
  const course1 = "React";
  const course2 = "Node";
  const course3 = "PHP";
  return <University course1={course1} course2={course2} course3={course3} />;
}
