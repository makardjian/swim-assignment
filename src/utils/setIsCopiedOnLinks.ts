import type { Link } from '../components/Links/Link.type';

export const setIsCopiedOnLinks = ({
  links,
  copiedLinkId,
}: {
  links: Link[];
  copiedLinkId: string;
}): Link[] => {
  return links.map((link) => {
    if (link.id === copiedLinkId) {
      return {
        ...link,
        isCopied: true,
      };
    } else {
      return {
        ...link,
        isCopied: false,
      };
    }
  });
};
