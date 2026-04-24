import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "hostc | Localhost to the edge" },
		{
			name: "description",
			content: "Instantly expose your local HTTP and WebSocket services.",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://hostc.dev/" },
		{ property: "og:title", content: "hostc | Localhost to the edge" },
		{
			property: "og:description",
			content: "Instantly expose your local HTTP and WebSocket services.",
		},
		{ property: "og:image", content: "https://hostc.dev/og-image.png" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:url", content: "https://hostc.dev/" },
		{ name: "twitter:title", content: "hostc | Localhost to the edge" },
		{
			name: "twitter:description",
			content: "Instantly expose your local HTTP and WebSocket services.",
		},
		{ name: "twitter:image", content: "https://hostc.dev/og-image.png" },
	];
}

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto px-8">
			{/* Hero */}
			<section className="py-24 text-center">
				<p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
					Edge Tunnels · Cloudflare Workers
				</p>
				<h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
					Localhost to the edge.
				</h1>
				<p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
					Instantly expose your local HTTP and WebSocket services to the public
					internet. Zero config. No signup.
				</p>
				<div className="flex items-center gap-3 justify-center flex-wrap">
					<Button
						size="lg"
						nativeButton={false}
						render={<Link to="/waitlist" />}
					>
						Join Waitlist
					</Button>
					<Button
						variant="outline"
						size="lg"
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
						Star on GitHub
					</Button>
				</div>
			</section>

			{/* Terminal */}
			<div className="max-w-[540px] mx-auto mb-24">
				<div className="border border-border rounded-sm overflow-hidden bg-card">
					<div className="flex gap-2 px-4 py-3 border-b border-border bg-muted/30">
						<span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
						<span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
						<span className="w-3 h-3 rounded-full bg-[#27c93f]" />
					</div>
					<div className="p-6 font-mono text-sm leading-7">
						<div className="flex gap-3">
							<span className="text-orange-400 font-bold">❯</span>
							<span className="text-foreground">npx hostc 3000</span>
						</div>
						<div className="mt-4 text-muted-foreground">
							✨ Tunnel established successfully!
						</div>
						<div className="text-muted-foreground">
							<span className="text-muted-foreground/50 inline-block w-16">
								Local:
							</span>
							http://127.0.0.1:3000
						</div>
						<div className="text-muted-foreground">
							<span className="text-muted-foreground/50 inline-block w-16">
								Public:
							</span>
							<span className="text-blue-400">
								https://t-a1b2c3d4.hostc.dev
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Waitlist teaser */}
			<section className="border-t border-border py-24 text-center">
				<p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
					Coming Soon
				</p>
				<h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 max-w-lg mx-auto">
					Custom subdomains &amp; user accounts.
				</h2>
				<p className="text-muted-foreground max-w-sm mx-auto mb-10 text-base">
					Persistent tunnels, custom URLs, and team access — leave your email
					and we'll let you know when it's ready.
				</p>
				<Button
					size="lg"
					nativeButton={false}
					render={<Link to="/waitlist" />}
				>
					Join the Waitlist
				</Button>
			</section>

			{/* Features */}
			<section className="border-t border-border py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
				{[
					{
						title: "Zero Config",
						desc: "Run one command, get a public HTTPS URL instantly. No account, no setup.",
					},
					{
						title: "WebSocket Support",
						desc: "Seamlessly proxies WebSocket upgrades out of the box. ws:// → wss://.",
					},
					{
						title: "Edge Powered",
						desc: "Traffic routes through Cloudflare's global network for low-latency worldwide.",
					},
				].map((f) => (
					<div key={f.title} className="bg-background p-8">
						<h3 className="font-heading text-lg font-semibold mb-3">
							{f.title}
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{f.desc}
						</p>
					</div>
				))}
			</section>
		</div>
	);
}

function GithubIcon() {
	return (
		<svg
			height="16"
			width="16"
			viewBox="0 0 24 24"
			fill="currentColor"
			role="img"
			aria-label="GitHub"
		>
			<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
		</svg>
	);
}

