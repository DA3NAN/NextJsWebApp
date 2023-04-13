import "@/styles/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />;
    </main>
  );
}
