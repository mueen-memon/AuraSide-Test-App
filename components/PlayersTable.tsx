import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Player } from "@/app/page";
import { Button } from "./ui/button";

import Image from "next/image";

type Props = {
  players: Player[];
  setPlayers: (players: Player[]) => void;
};

const PlayersTable = ({ players, setPlayers }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your mincraft players.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Avatar</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player, index) => (
          <TableRow key={`${player.username}_${index}}`}>
            <TableCell className="font-medium">
              <Image
                src={player.avatarUrl}
                alt="avatar"
                width={36}
                height={36}
              />
            </TableCell>
            <TableCell className={`${player.isAdmin}}`}> {player.username}</TableCell>
            <TableCell className="text-right">
              <Button
                variant={"destructive"}
                size={"icon"}
                onClick={() => {
                  setPlayers(players.filter((p, i) => i !== index));
                }}
              >
                X
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlayersTable;
