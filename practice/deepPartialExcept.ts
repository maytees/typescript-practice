import type { Person } from "..";
import type { Prettify } from "./prettify";

// This has two parts, they're seperated with an intersection, the first one
// is the optional ones, so everything thats not in the requiredpaths generic
// this is because of the extends ? never : P, they are made optional with the
// '?' after the key, the second part is the opposite, denoted with -? because
// those are the ones in required paths (extends rp ? P : never).
// Then you recurse over the object (if there's an object), and then
// you check if the required paths has p as a string, with a tail
// infer is used to
type DeepPartialExcept<T, RequiredPaths extends string> = {
	[P in keyof T as P extends RequiredPaths ? never : P]?: NonNullable<
		T[P]
	> extends object
		? DeepPartialExcept<
				NonNullable<T[P]>,
				RequiredPaths extends `${string & P}.${infer Rest}` ? Rest : never
			>
		: T[P];
} & {
	[P in keyof T as P extends RequiredPaths ? P : never]-?: NonNullable<
		T[P]
	> extends object
		? DeepPartialExcept<
				NonNullable<T[P]>,
				RequiredPaths extends `${string & P}.${infer Rest}` ? Rest : never
			>
		: T[P];
};

type PartialPerson = Prettify<
	DeepPartialExcept<Person, "name" | "address.zip" | "address">
>;
