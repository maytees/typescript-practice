import type { Person } from "..";

type StringActions = "uppercase" | "lowercase" | "capitalize" | "uncapitalize";

// takes in type, a key of said type, and what action to do (A) of type StringActions
// for every key (p) in type (t), if its of type k (as p extends k) check each
// condition with A extends "..." and commit action (upper<>, lower<>, cap<>...)
// string & p turns p into a string. eventually, if no condition is met, just set
// P to itself
type ApplyStringAction<T, K extends keyof T, A extends StringActions> = {
	[P in keyof T as P extends K
		? A extends "uppercase"
			? Uppercase<string & P>
			: A extends "lowercase"
				? Lowercase<string & P>
				: A extends "capitalize"
					? Capitalize<string & P>
					: A extends "uncapitalize"
						? Uncapitalize<string & P>
						: P
		: P]: T[P];
};

type PersonCapitalizeName = ApplyStringAction<
	Person,
	"name" | "address",
	"capitalize"
>;
