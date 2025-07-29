import { sharedConfig } from "@repo/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig({
	...sharedConfig,
	test: {
		...sharedConfig.test,
		// Package-specific overrides if needed
	},
});
