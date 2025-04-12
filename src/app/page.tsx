import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              {/* <ExternalLink className="h-8 w-8 text-blue-600" /> */}
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            Denne siden har flyttet
          </h1>

          <p className="text-gray-600 mb-8">
            Dette domenet har flyttet til{" "}
            <span className="font-semibold">DinDrenering.no</span>. Vennligst
            oppdater dine bokmerker og besøk oss på vår nye adresse.
          </p>

          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=60&width=240"
              alt="DinDrenering.no logo"
              width={240}
              height={60}
              className="mx-auto"
            />
          </div>

          <Link
            href="https://dindrenering.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors w-full"
          >
            Gå til DinDrenering.no
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          </Link>

          <p className="text-sm text-gray-500 mt-6">
            Takk for din forståelse og fortsatt støtte.
          </p>
        </div>
      </div>
    </div>
  );
}
