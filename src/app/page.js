import Image from "next/image";
import HomeSpotligth from "./components/homeSec/HomeSpotligth";
import HomeInfo from "./components/homeSec/HomeInfo";
import HomeAccordin from "./components/homeSec/HomeAccordin";
import TabTest from "./components/test/TabTest";

export default function Home() {
  return (
    <>
      {/* <HomeSpotligth /> */}
      <HomeInfo />
      {/* <HomeAccordin /> */}
      <TabTest />
    </>
  );
}
