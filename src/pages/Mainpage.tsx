import DetailModal from "@/components/common/DetailModal";
import Header from "@/components/Header";
import { useState } from "react";

export default function MainPage() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Header />
      <button onClick={() => setModal(true)}>모달 보기</button>
      <DetailModal show={modal} close={() => setModal(!modal)} />
    </div>
  );
}
