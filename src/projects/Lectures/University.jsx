export default function University({ course1, course2, course3 }) {  
  return (
    <>
      <h1 className="p-8 text-6xl text-white">List of courses</h1>
      <ul className="text-2xl p-8 text-white">
        <li>Course 1: {course1}</li>
        <li>Course 2: {course2}</li>
        <li>Course 3: {course3}</li>
      </ul>
    </>
  );
}
