import Header from "../ui/header";
import HomePageLink from '../ui/home-page-link';
import Game from "../ui/game/game";


export default function GamePage() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-center justify-between p-12">
      <Header title="Tic-Tac-Toe" />
      <main className="flex h-full w-full flex-col items-center justify-top py-6">
        <div className="flex w-full items-center md:items-left">
          <HomePageLink />
        </div>
        <Game />
      </main>
    </div>
  );
}
