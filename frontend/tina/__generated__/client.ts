import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ca9887baff2e1b57b9ed44e105f3c6b982ed18b5', queries,  });
export default client;
  