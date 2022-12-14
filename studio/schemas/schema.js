// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import problem from "./problem";
import example from "./example";
import { user, account, verificationToken } from "next-auth-sanity/schemas";
import solution from "./solution";

// We import object and document schemas

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    problem,
    solution,
    example,
    // The following are document types which will appear
    // in the studio.
  ]),
});
