import GitHubCalendar from "react-github-calendar";
import { SiGithub } from "react-icons/si";

export default function GitHubStats() {
  return (
    <div className="w-full pb-8 px-4 rounded-lg">
      <div className="flex items-center justify-center mb-6">
        <SiGithub className="w-5 h-5 mr-2 text-gray-200" />
        <h2 className="text-xl font-bold text-gray-200">GitHub Contributions</h2>
      </div>
      
      <div className="flex justify-center">
        <GitHubCalendar 
          username="kneerazzz" 
          blockSize={9}
          blockMargin={4}
          fontSize={12}
          style={{
            width: "100%",
            maxWidth: "900px",
            padding: "0 10px",
            color: "#ededed"
          }}
          hideColorLegend
          hideMonthLabels
        />
      </div>
      
      <div className="flex justify-center mt-4 text-xs text-gray-400">
        <span>Less</span>
        <div className="flex mx-2">
          {[0, 1, 2, 3, 4].map((level) => (
            <div 
              key={level}
              className="w-3 h-3 mx-0.5 rounded-sm"
              style={{
                backgroundColor: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'][level]
              }}
            ></div>
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}