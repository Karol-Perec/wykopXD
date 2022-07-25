import { NavigationType, useLocation, useNavigationType, useParams } from 'react-router-dom';
import LinkDetails from 'components/Links/LinkDetails/LinkDetails';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useLink from 'hooks/api/useLink';
import { Link } from '../types';

const LinkPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigationType = useNavigationType();
  const { data, isLoading } = useLink(
    id!,
    navigationType === NavigationType.Push && state ? (state as Link) : undefined
  );
  useTitle(data?.title);

  return (
    <>
      {data && <LinkDetails data={data} />}
      {isLoading && <Loading />}
    </>
  );
};

export default LinkPage;
