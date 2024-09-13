export function ContentHeader({children}: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center font-bold m-20">
            {children}
        </div>
    );
}
