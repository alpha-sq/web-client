export default function AlphaSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 pl-20 text-white bg-neutral-950 max-md:pl-5">
      {children}
    </section>
  );
}
