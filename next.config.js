/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return {
			fallback: [
				{
					source: "/:path*",
					destination: `https://marcoantolini.com/:path*`,
				},
			],
		};
	},
};

module.exports = nextConfig;
