import { GetServerSidePropsContext } from 'next';

export const onlyUnauthenticated = () => {
  return async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies['sb-access-token'];
    if (access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  };
};
