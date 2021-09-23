import React from 'react';

// https://kentcdodds.com/blog/react-jsx-as-a-server-side-templating-language
export default function RawText({ children }) {
  // eslint-disable-next-line react/no-danger
  return <raw-text dangerouslySetInnerHTML={{ __html: children }} />;
}
// parsing util
export function removeRawText(string) {
  return string.replace(/<\/?raw-text>/g, '');
}
