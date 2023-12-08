import Links from "~/components/Links";
import Profile from "~/components/Profile";
import Technologies from "~/components/Technologies";

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl h-screen flex md:items-center justify-center">
      <div className="p-8 w-full max-w-lg">
        <Profile />
        <div className="font-light mb-4 mt-8">
          <div className="flex justify-between items-end">
            <h1 className="text-6xl">sndrnz</h1>
            <Links />
          </div>
          <h2 className="text-lg text-white/30 ml-1">/sandro darnuzer/</h2>
        </div>

        <Technologies />
      </div>
    </main>
  );
}
