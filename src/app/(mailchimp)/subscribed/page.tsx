import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">Subscription confirmed</h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>
          Your subscription to our list has been confirmed. Thank you for
          subscribing!
        </p>
      </div>
      <Link
        href="/"
        className="btn-gradient mt-12 w-max cursor-pointer rounded-sm px-10 py-2 font-sans text-stone-950 hover:bg-slate-300"
      >
        Go Home
      </Link>
    </div>
  );
}
