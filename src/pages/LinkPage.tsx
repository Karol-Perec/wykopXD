import { NavigationType, useLocation, useNavigationType, useParams } from 'react-router-dom';
import LinkDetails from 'components/Links/LinkDetails/LinkDetails';
import ErrorMessage from 'components/UI/ErrorMessage';
import Loading from 'components/UI/Loading';
import useTitle from 'hooks/useTitle';
import useLink from 'hooks/api/useLink';
import { Link } from '../types';

const LinkPage = () => {
  const { state } = useLocation();
  const navigationType = useNavigationType();
  const { id } = useParams();
  const { data, isLoading, error } = useLink(
    id!,
    navigationType === NavigationType.Push ? (state as Link) : undefined
  );
  useTitle(data?.title);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <ErrorMessage error='Nie znaleziono' />;

  return <LinkDetails data={data} />;
};

export default LinkPage;
