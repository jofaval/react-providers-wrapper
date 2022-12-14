export function deepCopyObject(
  object: Record<string, any>
): Record<string, unknown> {
  return JSON.parse(JSON.stringify(object));
}
