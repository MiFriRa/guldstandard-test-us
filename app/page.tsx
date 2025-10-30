import Image from "next/image";

// Trin 2b: Læs variablen på serveren, når siden indlæses
const myTestVariable = process.env.MIN_TEST_VARIABEL || "### VARIABEL MANGLER (undefined) ###";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* --- VORES NYE TEST-SELE --- */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl font-bold">Trin 2: Test af Hemmelighed</h1>
        <p 
          data-testid="secret-value" 
          className="border bg-gray-100 p-4"
        >
          Værdien af MIN_TEST_VARIABEL er:
          <strong className="ml-2">{myTestVariable}</strong>
        </p>
      </div>
      {/* --- SLUT PÅ TEST-SELE --- */}

      {/* ... resten af den oprindelige Next.js skabelon-side ... */}
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {/* ... osv. ... */}

    </main>
  );
}