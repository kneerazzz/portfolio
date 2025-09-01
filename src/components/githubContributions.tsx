import GitHubCalendar from "react-github-calendar"


export default function GitHubStats() {
  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar blockSize={7} username="kneerazzz" />
    </div>
  );
}
