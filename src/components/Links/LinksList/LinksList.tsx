import { MainContentContainer } from '~/components/UI/Containers';
import Loading from '~/components/UI/Loading';
import useInfiniteScrolling, { getInfiniteScrollingTriggerIdx } from '~/hooks/useInfiniteScrolling';
import { Link } from '~/types';
import LinkPreview from '../Link/LinkPreview';

interface LinksListProps {
  links?: Link[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const LinksList = ({ links, isLoading, onInfiniteScroll }: LinksListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <MainContentContainer>
      {links?.map((link, idx) => (
        <LinkPreview
          link={link}
          key={link.id}
          containerRef={idx > getInfiniteScrollingTriggerIdx(links) ? infiniteScrollingTriggerRef : undefined}
        />
      ))}
      {isLoading && <Loading />}
    </MainContentContainer>
  );
};

export default LinksList;
