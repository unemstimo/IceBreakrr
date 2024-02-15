import Head from "next/head";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { v4 as uuid } from "uuid";
import CreateGame from "~/components/CreateGame";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SearchIcon from "@mui/icons-material/Search";

import Advertisement from "~/components/advertisement";
import GameCard from "~/components/gameCard";

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
  };

  const [showCreateGame, setShowCreateGame] = useState({ visible: false });

  const handleCreateGameShow = () => {
    setShowCreateGame({ visible: !showCreateGame.visible });
  };

  const handleCancelCreateGame = () => {
    setShowCreateGame({ visible: false });
  };

  const [games, setGames] = useState([
    {
      rules: "fuck off",
      id: uuid(),
      name: "Sura",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "2-10",
      description: "En morsom fysisk lek.",
      rating: 4.5,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Sisten",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "4-20",
      description: "En spennende utendørs lek.",
      rating: 5,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Vri åtter",
      playtime: "45 minutter",
      category: "Fysisk lek",
      players: "3-12",
      description: "En utfordrende lek for å strekke seg.",
      rating: 4,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Boksen går",
      playtime: "20 minutter",
      category: "Fysisk lek",
      players: "5-15",
      description: "En klassisk lek for å øve på reaksjonsevne.",
      rating: 4.2,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Ringleken",
      playtime: "40 minutter",
      category: "Fysisk lek",
      players: "4-12",
      description: "En morsom lek som innebærer å kaste ringer.",
      rating: 4.7,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Kubb",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "2-12",
      description: "Et strategisk spill som innebærer å kaste kubber.",
      rating: 4.3,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Husker",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "2-4",
      description: "En klassisk lek som utfordrer balanse.",
      rating: 4.8,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Hoppe tau",
      playtime: "20 minutter",
      category: "Fysisk lek",
      players: "1-4",
      description: "En flott måte å trene kondisjon på.",
      rating: 4.6,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Kongen befaler",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "5-30",
      description: "En morsom lek hvor en person gir kommandoer.",
      rating: 4.4,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Blindemann",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "5-20",
      description: "En spennende lek som handler om å unngå å bli fanget.",
      rating: 4.9,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Fotball",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "6-22",
      description: "En populær sport som spilles over hele verden.",
      rating: 4.5,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Stikkball",
      playtime: "45 minutter",
      category: "Fysisk lek",
      players: "4-16",
      description: "En morsom lek som involverer å kaste og fange baller.",
      rating: 4.3,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Hesteskokasting",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "2-8",
      description:
        "En tradisjonell lek som handler om å kaste hestesko på en pinne.",
      rating: 4.7,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Tautrekking",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "4-20",
      description: "En konkurransedyktig lek som tester styrke.",
      rating: 4.6,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Potetløp",
      playtime: "20 minutter",
      category: "Fysisk lek",
      players: "3-10",
      description: "En morsom lek som innebærer å balansere poteter på skjeer.",
      rating: 4.4,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Eggeløp",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "3-12",
      description: "En utfordrende lek hvor man må bære et egg på en skje.",
      rating: 4.8,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "På staur",
      playtime: "40 minutter",
      category: "Fysisk lek",
      players: "5-15",
      description: "En morsom lek som handler om å hoppe over staur.",
      rating: 4.5,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Flasketuten peker på",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "4-20",
      description:
        "En klassisk lek som innebærer å kysse den flasken peker på.",
      rating: 4.3,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Katt og mus",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "6-30",
      description: "En morsom lek som handler om å unngå å bli fanget.",
      rating: 4.9,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Stiv heks",
      playtime: "40 minutter",
      category: "Fysisk lek",
      players: "4-16",
      description:
        "En spennende lek hvor en person prøver å fange andre spillere.",
      rating: 4.7,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Bytte plass",
      playtime: "1 time",
      category: "Fysisk lek",
      players: "8-40",
      description: "En morsom lek som innebærer å bytte plass raskt.",
      rating: 4.5,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Kaste på boks",
      playtime: "30 minutter",
      category: "Fysisk lek",
      players: "4-12",
      description:
        "En utfordrende lek som handler om å kaste baller på en boks.",
      rating: 4.2,
    },
    {
      rules: "fuck off",
      id: uuid(),
      name: "Potetkasting",
      playtime: "20 minutter",
      category: "Fysisk lek",
      players: "3-8",
      description: "En morsom lek hvor man kaster poteter på en målskive.",
      rating: 4.6,
    },
  ]);

  return (
    <div>
      <Head>
        <title>Dashboard | IceBreakr</title>
        <meta
          name="dashboard"
          content="Learn more about what IceBreakr offers."
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 font-darker text-lg font-bold text-white">
        <SignedOut>
          <SignInButton />
          <p>
            This content is public. Only signed out users can see the
            SignInButton above this text.
          </p>
        </SignedOut>
        <SignedIn>
          <div className="max-w-screen-l flex h-screen w-full max-w-[1440px] rounded-3xl bg-neutral-950">
            {/* Left section */}
            <section className="m-2 flex h-full w-1/4 min-w-72 max-w-96 flex-col justify-start rounded-2xl p-0 align-middle">
              <div className="mb-2 flex h-fit max-h-40 w-full flex-col justify-center rounded-2xl bg-neutral-900 p-4 align-middle">
                <Link href={"/profile"} className="h-full w-full">
                  <button className="flex h-full w-full items-center justify-start gap-4 rounded-xl p-2 align-middle hover:bg-neutral-700">
                    <UserButton /> Min Profil
                  </button>
                </Link>
                <Link href={"/dashboard"} className="h-full w-full">
                  <button className="flex h-full w-full items-center justify-start gap-4 rounded-xl p-2 align-middle hover:bg-neutral-700">
                    <HomeRoundedIcon />
                    Hjem
                  </button>
                </Link>
              </div>
              <button
                onClick={handleCreateGameShow}
                className="mb-2 flex h-20 min-h-20 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 p-2 align-middle hover:bg-violet-500 active:bg-violet-800"
              >
                OPPRETT LEK
                <AddCircleOutlineRoundedIcon />
              </button>
              {/* Filters */}
              <div className="mb-2 flex h-fit w-full flex-col justify-start rounded-2xl bg-neutral-900 p-4 align-middle">
                <div className="flex flex-row items-baseline justify-between align-baseline">
                  <h2 className="text-2xl font-bold ">Filtere</h2>
                  <button
                    className="text-l text-neutral-500 hover:underline"
                    onClick={handleClearFilters}
                  >
                    Tøm
                  </button>
                </div>
              </div>
              {/* Ad space */}
              <p className="font-normal text-neutral-500">Annonse</p>
              <div className="flex h-auto w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-800">
                <div className="h-full w-full">
                  <Advertisement />
                </div>
              </div>
            </section>

            {/* Middle section */}
            <section className="my-2 flex h-full w-full min-w-[420px] flex-col justify-start rounded-2xl bg-neutral-900 p-4 align-middle">
              {/* Search section */}
              <div className="flex w-full flex-row items-center justify-between align-middle">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex w-2/3 items-center overflow-hidden rounded-full bg-neutral-800 p-1 align-middle font-normal text-neutral-600"
                >
                  <button type="submit" className="p-2">
                    <SearchIcon className="text-neutral-500" />
                  </button>
                  <input
                    className="w-full bg-neutral-800 py-2 pl-2 pr-2 text-white focus:outline-none"
                    type="search" // Changed to search to improve semantics
                    placeholder="Søk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
                <div className="flex items-center justify-start gap-2 align-middle">
                  <p className="mr-2 font-bold text-neutral-500">Sorter: </p>
                  <button className=" rounded-full bg-violet-600 px-4 py-2 text-white shadow-lg hover:bg-violet-500 active:bg-violet-800">
                    Populære
                  </button>
                  <button className=" rounded-full bg-violet-600 px-4 py-2 text-white shadow-lg hover:bg-violet-500 active:bg-violet-800">
                    Nyeste
                  </button>
                  <button className=" rounded-full bg-violet-600 px-4 py-2 text-white shadow-lg hover:bg-violet-500 active:bg-violet-800">
                    Navn
                  </button>
                </div>
              </div>
              {/* Content section */}
              <div className="-mb-2 mt-4 flex w-full justify-start">
                <p className="font-normal text-neutral-500">
                  Viser 0 av 999 leker • Navn A til Æ
                </p>
              </div>
              <div className="mt-4 flex h-full w-full flex-wrap justify-start gap-4 overflow-y-auto rounded-xl bg-neutral-900">
                {/* Map through the games array to render GameCard components */}
                {games.map((game) => (
                  <GameCard
                    key={game.id}
                    name={game.name}
                    playtime={game.playtime}
                    category={game.category}
                    players={game.players}
                    rules={game.rules}
                    description={game.description}
                    rating={game.rating}
                  />
                ))}
              </div>
            </section>
            {showCreateGame.visible && (
              <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-neutral-900 bg-opacity-90 align-middle">
                <CreateGame />
                <button
                  className="text-l mt-2 text-neutral-300 hover:underline"
                  onClick={handleCancelCreateGame}
                >
                  Avbryt
                </button>
              </div>
            )}
          </div>
        </SignedIn>
      </main>
    </div>
  );
}
