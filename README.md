# IPU Student Hub

IPU Student Hub is a clean, modern, and visually attractive web application designed specifically for GGSIPU (Guru Gobind Singh Indraprastha University) students. It provides essential academic utilities like an attendance tracker, CGPA calculator, and resource hub (Notes & PYQs) in one place.

## 🚀 Features

- **Attendance Calculator**: Tracks your percentage and tells you exactly how many more classes you need to attend to hit the mandatory 75% mark.
- **CGPA Calculator**: Implements the exact IPU grading system (O, A+, A, B+, B, C, P, F) and converts CGPA to percentage.
- **PYQs & Notes**: Organized resource sections for Previous Year Questions and subject notes by semester.
- **Semester Planner**: Keeps track of upcoming internal exams, deadlines, and end-term practicals.
- **Dark/Light Mode**: Persisted theme preference for late-night study sessions.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS** (for modern, utility-first styling)
- **Local Storage API** (for theme persistence)

## 💻 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone or Download the Project**
   ```bash
   # If you have the files in a folder, skip to step 2
   ```

2. **Initialize the Project**
   Since this is a Vite-based structure, ensure you have a `package.json`. If you are starting from the provided code files:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**
   ```bash
   npm install react react-dom lucide-react
   npm install -D vite @types/react @types/react-dom tailwindcss postcss autoprefixer
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Open the Browser**
   Navigate to `http://localhost:5173` (or the port specified by Vite) to see the app in action.

## 🧮 How the Calculators Work

### Attendance Calculator
The calculator uses a 75% threshold logic. 
- **Formula**: `(Attended / Total) * 100`
- **Goal Logic**: If the percentage is below 75%, it calculates `x` (number of upcoming classes to attend) using:
  `3 * Total - 4 * Attended`

### CGPA Calculator
Strictly follows the IPU Grading Table:
| Marks Range | Grade | Point |
|-------------|-------|-------|
| 90–100      | O     | 10    |
| 75–89       | A+    | 9     |
| 65–74       | A     | 8     |
| 55–64       | B+    | 7     |
| 50–54       | B     | 6     |
| 45–49       | C     | 5     |
| 40–44       | P     | 4     |
| < 40        | F     | 0     |

**CGPA to Percentage**: `Percentage = CGPA * 9.5` (Standard IPU Conversion).

## 📄 License
This project is for academic purposes and internal use by students. Data provided (Notes/PYQs) is currently static/dummy.
