import type { Link } from '../components/Links/Link.type';

export const injectIsCopiedValueIntoRawLink = (rawLink: Link) => ({
  ...rawLink,
  isCopied: false,
});
