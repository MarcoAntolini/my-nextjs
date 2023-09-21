import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.string()
});

envSchema.parse(process.env);

type Env = z.infer<typeof envSchema>;

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Env {}
	}
}
