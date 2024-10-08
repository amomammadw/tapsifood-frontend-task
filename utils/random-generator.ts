export default function (length: number = 4): string {
  const str = Math.random().toString(36).substring(2, length);
  return str;
}
