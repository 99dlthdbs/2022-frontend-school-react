import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../mocks/api';

// api를 통해 현재 닉네임값 가져오기
// handleSubmit: 업데이트 된 inputValue를 서버에 전송해서, 닉네임값 업데이트 하기

export default function Edit() {
  const [inputValue, setInputValue] = useState('');

  const { data, isLoading } = useQuery('@getUser', getUser);
  console.log(data);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {data.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type='text' value={inputValue} onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
