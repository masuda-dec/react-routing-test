import { Outlet } from 'react-router-dom';

function ThreadIndex() {
  return (
    <>
      <h2>スレッドタイトル</h2>
      <Outlet />
    </>
  );
}

export default ThreadIndex;