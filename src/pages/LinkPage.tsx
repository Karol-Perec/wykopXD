import { NavigationType, useLocation, useNavigationType, useParams } from 'react-router-dom';
import useLink from '~/api/useLink';
import LinkDetails from '~/components/Links/Link/LinkDetails';
import ErrorMessage from '~/components/UI/ErrorMessage';
import Loading from '~/components/UI/Loading';
import useTitle from '~/hooks/useTitle';
import { Link } from '~/types';

const LinkPage = () => {
  const { id } = useParams();
  const { state }: { state: Link } = useLocation();
  const navigationType = useNavigationType();
  const { data, isLoading, error } = useLink(
    id!,
    navigationType === NavigationType.Push && state ? state : undefined
  );
  useTitle(data?.title);

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {data && <LinkDetails data={data} />}
      {isLoading && <Loading />}
    </>
  );
};

export default LinkPage;
