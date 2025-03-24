import { useContext, createContext, useEffect, useState } from "react";

interface TopCities {
  [key: string]: {
    visits: number,
    countryCode?: string,
  }
}

interface StateContextValue {
  topCities: TopCities
  visit: (city: string, latitude: number, longitude: number, countryCode?: string) => void;
  theme: "dark" | "light";
  switchTheme: () => void;
}

const StateContext = createContext<StateContextValue | null>(null);

interface StateProviderProps {
  children: React.ReactNode;
}

function StateProvider({ children }: StateProviderProps) {
  const [theme, setTheme] = useState<StateContextValue['theme']>('light');
  const [topCities, setTopCities] = useState<TopCities>({})

  /**
   * Switches the theme of whole website
   * */
  function switchTheme() {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  /**
  * Increments the visited city if exists in topCities, else replaces
  * the least visited city with new city that is being visited
  * */
  function visit(city: string, latitude: number, longitude: number, countryCode?: string) {
    setTopCities((prevItem) => {
      // update cities with the city that is being visited
      let updatedCities = {
        ...prevItem,
        [`${city};${latitude};${longitude}`]: {
          visits: (prevItem[`${city};${latitude};${longitude}`]?.visits || 0) + 1,
          countryCode: prevItem[`${city};${latitude};${longitude}`]?.countryCode || countryCode
        }
      };

      const sorted = Object.fromEntries(
        Object.entries(updatedCities).sort(([, a], [, b]) => b.visits - a.visits)
      );

      localStorage.setItem('cities', JSON.stringify(sorted));

      return sorted
    });
  }

  // Before we close, we snip the topCities object to only store top 3 cities and save it to local storage
  const handleBeforeUnload = () => {
    setTopCities((prevItems) => {
      const keys = Object.keys(prevItems);

      const slice = keys.slice(0, 3).reduce<{ [key: string]: any }>((acc, key) => {
        acc[key] = prevItems[key];
        return acc;
      }, {});

      localStorage.setItem('cities', JSON.stringify(slice))

      return slice;
    });
  };


  // Get previous state, if any
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);


    const cities = localStorage.getItem('cities')
    if (cities) {
      setTopCities(JSON.parse(cities))
    }
    const _theme = localStorage.getItem('theme');
    if (_theme && (_theme === 'dark' || _theme === 'light')) {
      setTheme(_theme);
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <StateContext.Provider value={{ theme, switchTheme, topCities, visit }}>
      {children}
    </StateContext.Provider>
  );
}

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within a StateProvider");
  }
  return context;
};

export default StateProvider;
