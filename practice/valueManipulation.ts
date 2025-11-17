import type { Person } from "..";

// checks if the key is the one given from k with extends k, and if so, set the
// new type to Z, else keep it the same
type ChangeType<T, K extends keyof T, Z> = {
	[P in keyof T]: P extends K ? Z : T[P];
};

type auntieToBoolean = ChangeType<Person, "auntie", boolean>;
