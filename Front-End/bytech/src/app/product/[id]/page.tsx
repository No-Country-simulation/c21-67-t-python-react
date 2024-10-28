import { DetailsProduct } from "@/components/product/DetailsProduct";
import { getProductById } from "@/services/product";
import { notFound } from "next/navigation";

interface DetailPageProps {
  params: {
    id: number;
  };
}

export default async function DetailPageId({
  params,
}: Readonly<DetailPageProps>) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <>{product && <DetailsProduct {...product} />}</>;
}
