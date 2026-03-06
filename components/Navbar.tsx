import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left: Website Name */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    OutCare
                </Link>

                {/* Right: Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Login</Link>
                    </Button>

                    <Button asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>

            </div>
        </header>
    )
}

export default Navbar
