export function truncate(text: string, length = 25) {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
}
