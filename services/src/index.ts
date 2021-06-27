import { environment } from "./utils/constants";

import * as web from "./web";

async function main() {
  web.start(environment.PORT);

  console.log(`Server started on port ${environment.PORT}.`);
}

main().catch((error) => console.error(error));
