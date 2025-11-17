import type { Person } from "..";

// as renames, so we're saying if the p extends k, set the "as" to Z, which
// renames it.
type RenameKey<T, K extends keyof T, Z extends string> = {
	[P in keyof T as P extends K ? Z : P]: T[P];
};

type StepDad = RenameKey<Person, "dad", "stepDad">;
