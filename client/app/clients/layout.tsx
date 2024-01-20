export default function CliensLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block text-center justify-center w-[50vw] h-64">
                {children}
            </div>
        </section>
    );
}