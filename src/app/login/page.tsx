import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LogInPage() {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    // 필드 검사 후
    const errors = validate();
    // 에러 값을 설정하고
    setErrors(errors);
    // 잘못된 값이면 제출 처리를 중단한다.
    if (Object.values(errors).some((v) => v)) {
      return;
    }

    alert(JSON.stringify(values, null, 2));
  };

  return  ( <form onSubmit={handleSubmit}>
  <input {/* 생략 */} />
  {/* 이메일 오류메시지를 출력한다 */}
  {errors.email && <span>{errors.email}</span>}

  <input {/* 생략 */} />
  {/* 비밀번호 오류메시지를 출력한다 */}
  {errors.password && <span>{errors.password}</span>}

  {/* 생략 */}
</form>);
}


