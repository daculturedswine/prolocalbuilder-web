type Schema = Record<string, unknown> | Record<string, unknown>[];

const LS = " "; // LINE SEPARATOR
const PS = " "; // PARAGRAPH SEPARATOR

/**
 * Escape characters that could break out of a <script> context.
 * Even with author-controlled data we harden against future content
 * containing `</script>` substrings or unicode line separators.
 */
function safeStringify(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .split(LS)
    .join("\\u2028")
    .split(PS)
    .join("\\u2029");
}

/**
 * Inline JSON-LD script tag. Pass a single object or an array of schemas
 * (each rendered as its own <script> so Google parses them independently).
 */
export function JsonLd({ data }: { data: Schema }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStringify(schema) }}
        />
      ))}
    </>
  );
}
