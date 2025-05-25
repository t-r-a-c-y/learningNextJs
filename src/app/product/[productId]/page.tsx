export default function ProductId({params}: {params: {productId: string}}) {
    const { productId } = params;
    return (
        <div>
            <p>Product ID: {productId}</p>
            <p>Product Name: Product {productId}</p>
            <p>Product Description: This is the description for product {productId}.</p>
        </div>
    );
}