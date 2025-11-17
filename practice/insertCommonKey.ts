import type { Prettify } from "./prettify";

// Given a record of key stirng, and object value, and k (string), and type z
// for every property (p) of type (t), (prettify just makes it look good, doesnt do anything)
// return an intersection of a new object/record where [Key in K] is saying
// set the "name" of the key to K (the string given), and set it's value's type
// to type Z, and intersect (&) it with the types from the record, sort of like a
// spread.
// [keyof T] is making a union out of these, so they're seperated.
type InsertCommonKey<T extends Record<string, object>, K extends string, Z> = {
	[P in keyof T]: Prettify<
		{
			[Key in K]: Z;
		} & T[P]
	>;
}[keyof T];

// Example
type ApiResponseType = "error" | "success";

type ApiResponse = InsertCommonKey<
	{
		error: {
			message: string;
		};
		success: {
			data: Record<string, string>;
		};
	},
	"type",
	ApiResponseType
>;

function getResponse(): ApiResponse {
	return {
		type: "error",
		data: {
			test: "asdf",
		},
	};
}
