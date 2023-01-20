export default async function copyToClipboard(text: string, message = "Copied!") {
  await navigator.clipboard.writeText(text);
  alert(message)
}
