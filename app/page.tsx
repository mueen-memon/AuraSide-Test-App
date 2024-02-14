"use client";

import { InputForm } from "@/components/InputForm";
import PlayersTable from "@/components/PlayersTable";
import { useState } from "react";

export interface Player {
  username: string;
  avatarUrl: string;
  isAdmin?: boolean;
}

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  console.log("Home ~ player", players);

  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex flex-col py-16 px-32 gap-4">
        <InputForm setPlayers={setPlayers} players={players} />
        <div>
          <h1 className="text-4xl font-bold"> Minecraft Players </h1>
        </div>
        <PlayersTable players={players} setPlayers={setPlayers} />
      </section>
    </main>
  );
}
