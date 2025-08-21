export default function Header() {
  return (
    <header className="flex justify-between items-center px-[10px] py-5 bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5 list-none font-normal text-sm ">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
