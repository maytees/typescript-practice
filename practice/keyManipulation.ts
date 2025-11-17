import type { Person } from "..";

type RenameKey<T, K extends keyof T, Z extends string> = {
	[P in keyof T as P extends K ? Z : P]: T[P];
};

type StepDad = RenameKey<Person, "dad", "stepDad">;
