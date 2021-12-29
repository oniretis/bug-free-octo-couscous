import Head from "next/head";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="grid grid-cols-2 gap-0 pl-10 mt-7">
        <div>
          <List />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
}
