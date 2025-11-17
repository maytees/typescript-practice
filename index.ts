type SiblingRelation = "sister" | "brother";

export interface Person {
	name: string;
	age: number;
	address?: {
		line: string;
		line2?: string;
		zip: string;
	};
	auntie: Person;
	mom?: Person | SiblingRelation;
	dad?: Person;
	siblings?: (Person | SiblingRelation)[];
}
