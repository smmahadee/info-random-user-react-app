import React from 'react';
import SingleUser from './SingleUser';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
  const { isLoading, data, isError } = useSelector(state => state.getUserData);

  return (
    <div className='d-flex flex-wrap'>
      {isLoading && 'Loading...'}
      {isError && isError}
      {data.map(user => (
        <SingleUser key={user.id} userData={user} />
      ))}
    </div>
  );
}
