import { useForm } from "react-hook-form"

function LoginForm() {
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm();
    // register: input 등록
    // handleSubmit: submit 후 액션
    // formState: form 상태에 관한 몇몇 data를 가지고 있음

    return (
        <div>
            <form onSubmit={handleSubmit(async (data) => {
                await new Promise((r) => setTimeout(r, 1_000))
                alert(JSON.stringify(data));
            })}>
                <label htmlFor="email">이메일</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="ex@gmail.com" 
                    {
                        ...register(
                            "email", // input 이름
                            {required: "이메일은 필수입니다", pattern: {value: /\S+@\S+\.\S/, message: "이메일 형식에 맞지 않습니다!"}}
                    )}
                    aria-invalid={errors.email ? "true" : "false"} // errors.input 이름
                />
                {errors.email && <small>{errors.email.message}</small>}
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" placeholder="********" {
                    ...register(
                        "password", // input 이름
                        {required: "비밀번호는 필수입니다", minLength: {value: 8, message: "비밀번호는 8자리 이상이어야합니다!"}}
                    )}
                    aria-invalid={errors.password ? "true" : "false"} // errors.input 이름
                />
                {errors.password && <small>{errors.password.message}</small>}
                <button type="submit" disabled={isSubmitting}>로그인</button>
            </form>
        </div>
    );
}

export default LoginForm;