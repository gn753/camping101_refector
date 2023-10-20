import useTokenAuth from "@libs/hooks/useTokenAuth";
import GeneralLayout from "../Layout/GeneralLayout";

// 고차컴포넌트는 소문자로 명명
const withAuthGuardAndRouter = (WrappedComponent: React.ComponentType) => {
  function Wrapper(props: any) {
    const { router, currentPath, user, loading } = useTokenAuth();

    // 추가: 로딩 중일 때는 로딩 화면을 보여줌
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user && currentPath === "/user") {
      // 권한이 없는 경우 "/user"로 이동하도록 설정
      router.replace("/login");
      return null;
    }

    if (user && currentPath === "/login") {
      // 권한이 없는 경우 "/user"로 이동하도록 설정
      router.replace("/");
      return null;
    }

    // 권한이 있을 때는 해당 컴포넌트를 보여줌.
    if (user) {
      return (
        <GeneralLayout isLogin>
          <WrappedComponent {...props} />;
        </GeneralLayout>
      );
    }

    return (
      <GeneralLayout isLogin={false}>
        <WrappedComponent {...props} />;
      </GeneralLayout>
    );
  }

  return Wrapper;
};

export default withAuthGuardAndRouter;
