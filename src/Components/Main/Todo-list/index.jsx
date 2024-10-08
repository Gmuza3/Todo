import "./style.css";
import { useTodos } from "../../Store";

export const Todolist = () => {
  const { list, removeItems } = useTodos();

  return (
    <div className="todo-list">
      <ul>
        {list.map((item, index) => (
          <div className="output-zone" key={index}>
            <li>
              <p>{item}</p>
            </li>
            <button
              className="todoDel"
              type="button"
              onClick={() => removeItems(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <rect width="38" height="38" rx="10" fill="#999999" />
                <path
                  d="M28.7969 10.9844H9.20312"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.3282 16.3281V23.4531"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.6719 16.3281V23.4531"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.0156 10.9844V27.9062C27.0156 28.1425 26.9218 28.369 26.7547 28.536C26.5877 28.703 26.3612 28.7969 26.125 28.7969H11.875C11.6388 28.7969 11.4122 28.703 11.2452 28.536C11.0782 28.369 10.9843 28.1425 10.9843 27.9062V10.9844"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.4531 10.9844V9.20313C23.4531 8.73071 23.2655 8.27764 22.9314 7.94359C22.5974 7.60954 22.1443 7.42188 21.6719 7.42188H16.3281C15.8557 7.42188 15.4026 7.60954 15.0686 7.94359C14.7345 8.27764 14.5469 8.73071 14.5469 9.20313V10.9844"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
