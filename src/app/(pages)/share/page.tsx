export default function Page() {
  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-center md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4">
      <h1 className="mb-8 text-5xl font-bold">Share Your Story</h1>
      <p className="font-sans text-xl font-thin leading-relaxed">
        If you&apos;d like to share your journey to becoming a designer send us
        a message at{" "}
        <a
          href="mailto:info@pathtodesign.com"
          className="underline hover:cursor-pointer"
        >
          info@pathtodesign.com.
        </a>
      </p>
    </div>
  );
}
