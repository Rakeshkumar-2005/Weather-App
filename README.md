# 🌦️ Weather App

A simple and responsive Weather Application built using **React.js, Vite, and Material UI**. It allows users to search for any city and view its current weather information using the OpenWeatherMap API.

## 🚀 Features

- 🔍 Search weather by city name.
- 🌡️ Display current temperature in Celsius.
- 💧 Display humidity levels.
- 🌤️ Show weather conditions and descriptions.
- 🌡️ Display minimum and maximum temperatures.
- 🤗 Show feels-like temperature.
- 🖼️ Dynamic weather card images based on weather conditions.
- ⚡ Fast development and performance with Vite.
- 🎨 Modern UI using Material UI components.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **UI Library:** Material UI (MUI)
- **Styling:** CSS
- **API:** OpenWeatherMap API
- **Programming Language:** JavaScript

## 📂 Project Structure

```text
Weather-App/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/Rakeshkumar-2005/Weather-App.git
```

**2. Navigate to the project directory**

```bash
cd Weather-App
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open in browser**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🌐 API Configuration

This project uses the OpenWeatherMap API to fetch real-time weather information.

1. Visit [OpenWeatherMap](https://openweathermap.org/api).
2. Create an account.
3. Generate an API key.
4. Configure the API key in `src/SearchBox.jsx`.

**Security Note:** The current implementation contains a hardcoded API key. Replace it with your own key and consider using a backend proxy to protect it. Never commit private API credentials to GitHub.

## 📸 How to Use

1. Open the Weather App.
2. Enter the name of a city in the search box.
3. Click the **Send** button.
4. View the weather information for the selected city.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Future Improvements

- Add a 5-day weather forecast.
- Add current location weather detection.
- Add wind speed and atmospheric pressure.
- Improve mobile responsiveness.
- Add dark and light themes.
- Improve error handling and loading indicators.

## 👨‍💻 Author

**Rakesh Kumar**

- GitHub: [@Rakeshkumar-2005](https://github.com/Rakeshkumar-2005)

## ⭐ Support

If you like this project, please consider giving it a on GitHub!

---

**Made with ❤️ using React.js + MaterialUI**
