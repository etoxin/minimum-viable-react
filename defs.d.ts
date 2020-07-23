type BulmaThemes = "is-light" | "is-dark" | "is-white" | "is-link" | "is-black";

export interface NewsItem {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface AppState {
  theme: "dark" | "light" | "blue";
  primaryTheme: BulmaThemes;
  secondaryTheme: BulmaThemes;
  isNavActive: boolean;
  newsItems: Array<NewsItem>;
}

export interface Actions {
  newsItems?: Array<NewsItem>;
  type:
    | "INIT_APP"
    | "SET_THEME_DARK"
    | "SET_THEME_LIGHT"
    | "SET_THEME_BLUE"
    | "TOGGLE_NAVIGATION"
    | "CLOSE_NAVIGATION"
    | "SET_NEWS_ITEMS";
}
