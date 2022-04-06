export default function Blog({ children }) {
    return (<div className="flex flex-col min-h-screen min-w-full justify-center items-center py-2">
        <h1 className="text-4xl font-mono font-bold text-center">12th Day Blog</h1>
        {children}
    </div>)
}