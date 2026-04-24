import { Link, Outlet } from "react-router";
import { Button } from "~/components/ui/button";
import { GithubIcon } from "~/components/icons";

export default function Layout() {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
				<div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between">
					<Link
						to="/"
						className="font-heading text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
					>
						hostc
					</Link>
					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="sm"
							nativeButton={false}
							render={<Link to="/waitlist" />}
						>
							Join Waitlist
						</Button>
						<Button
							variant="ghost"
							size="sm"
							nativeButton={false}
							render={
								<a
									href="https://github.com/akazwz/hostc"
									target="_blank"
									rel="noreferrer"
								/>
							}
						>
							<GithubIcon />
							GitHub
						</Button>
					</div>
				</div>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>

			<footer className="border-t border-border">
				<div className="max-w-5xl mx-auto px-8 h-12 flex items-center justify-between text-xs text-muted-foreground">
					<span>© {new Date().getFullYear()} hostc</span>
					<a
						href="https://github.com/akazwz/hostc/blob/main/LICENSE"
						target="_blank"
						rel="noreferrer"
						className="hover:text-foreground transition-colors"
					>
						Apache 2.0
					</a>
				</div>
			</footer>
		</div>
	);
}

