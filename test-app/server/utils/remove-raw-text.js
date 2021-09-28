// parsinig util as per: https://kentcdodds.com/blog/react-jsx-as-a-server-side-templating-language
export default function removeRawText(string) {
  return string.replace(/<\/?raw-text>/gu, '');
}
