import Header from "@/components/Header";
import { useMemo } from "react";
import { useLocation } from "react-router";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function GoodsListPage() {
  const query = useQuery();
  const id = query.get("category");
  console.log(id);

  return (
    <div>
      <Header />
    </div>
  );
}
