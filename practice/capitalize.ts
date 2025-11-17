import type { Person } from "..";

// takes in type and key of said type.
// for each property (p) of type (t), if p is k (as p extends k), capitalize it,
// string & p turns p into a string; else: just return p because its not the target
// key.
// : T[P] is saying keep the value of key P as is in type T
type CapitalizeKey<T, K extends keyof T> = {
	[P in keyof T as P extends K ? Capitalize<string & P> : P]: T[P];
};

// Same as capitalizekey but targets all values beacuse no check is being mad
// for if p extends "k"
type CapitalizeKeys<T> = {
	[P in keyof T as Capitalize<string & P>]: T[P];
};

// 
type CapitalizeKeysNested<T> = {
	[P in keyof T as Capitalize<string & P>]: NonNullable<T[P]> extends object
		? CapitalizeKeysNested<NonNullable<T[P]>>
		: T[P];
};

type CapitalizedAddressPerson = CapitalizeKey<Person, "address">;
type CapitalizedPerson = CapitalizeKeys<Person>;
type CapitalizePersonNested = CapitalizeKeysNested<Person>;
