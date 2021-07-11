import { toaster } from "evergreen-ui";

export function warn({ status }: { status: number }) {
  if (status === 200) {
    toaster.success("Successfully saved document.");
  } else {
    toaster.danger("Could not save document.");
  }
}
