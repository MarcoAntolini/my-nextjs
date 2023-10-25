/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return {
			fallback: [
				{
					source: "/:path*",
					destination: `https://marcoantolini.com/next-app-template/:path*`,
				},
			],
		};
	},
};

module.exports = nextConfig;
