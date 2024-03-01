import React, { useState, useEffect } from "react";
import Layout from "~/components/layout";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/button";
import { type CreatePlaylist } from "~/server/api/routers/playlist";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { ArrowBackRounded } from "@mui/icons-material";

const CreatePlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [showError, setShowError] = useState(false);

  const myPlaylistsQuery = api.playlist.getPlaylistsByUserId.useQuery();
  const useCreatePlaylistMutation = api.playlist.create.useMutation();

  const router = useRouter();

  const handlePlaylistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(event.target.value);
  };

  const showErrorMessage = () => {
    setShowError(true);
  };

  const hideErrorMessage = () => {
    setShowError(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (playlistName === "") {
      console.log("Please fill in all fields!");
      showErrorMessage();
      return;
    }
    hideErrorMessage();

    const newPlaylist: CreatePlaylist = {
      name: playlistName,
    };

    try {
      const playlist = await useCreatePlaylistMutation.mutateAsync(newPlaylist);
      console.log("Playlist created: ", playlist);
      await router.push(`/playlistPage?playlistId=${playlist.playlistId}`);
    } catch (error) {
      console.error("Failed to create playlist", error);
      showErrorMessage();
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-full justify-start p-4 bg-neutral-900 rounded-2xl">
        <div className="flex align-middle items-center gap-2">
            <button><ArrowBackRounded onClick={() => router.back()} /></button>
            <p className="text-xxl font-bold">Lag ny lekeliste</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex text-rg font-normal mt-4 w-full flex-col items-start justify-start gap-4 align-middle"
        >
          <input
            type="text"
            value={playlistName}
            onChange={handlePlaylistNameChange}
            placeholder="Navn på lekeliste..."
            className="w-full rounded-lg bg-neutral-800 py-2 pl-2 pr-2 text-white focus:outline-none"
          />
          <div className="flex gap-4">
          <button
            className="rounded-full font-bold bg-violet-600 px-4 py-2 text-white shadow-lg hover:bg-violet-500 active:bg-violet-800"
            type="submit"
          >
            Opprett
          </button>
          <button className="text-neutral-500 hover:underline" type="button" onClick={() => router.back()}>
            Avbryt
          </button>
          </div>
          {showError && <p className="text-red-500">Du må ha en tittel!</p>}
        </form>
      </div>
    </Layout>
  );
};

export default CreatePlaylistPage;
