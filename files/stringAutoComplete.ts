// Doesnt auto complete
// This doesnt work because typescript sees john and jessica
// as parts of the string
type CommonNameNoIntersection = "john" | "jessica" | string;

// Auto complete works
// This works because typescript doesnt simplify intersections
// so it cant say that string is the same as john and jessica,
// because it thinks that the intersection is a seperate type
type CommonName = "john" | "jessica" | (string & {});

const name: CommonName = "asdf";
const name2: CommonName = "john";
