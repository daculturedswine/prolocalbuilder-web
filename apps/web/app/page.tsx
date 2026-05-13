import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-navy-800">OPTCG Simulator</h1>
        <p className="text-ink-500">Play One Piece TCG matches in your browser</p>
        <Link
          href="/play"
          className="inline-block rounded-lg bg-orange-600 px-8 py-3 text-lg font-semibold text-white hover:bg-orange-700 transition-colors"
        >
          Play
        </Link>
      </div>
    </div>
  );
}
