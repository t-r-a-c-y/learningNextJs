import { metadata as layoutMetadata } from "../layout";
import Counter from "./counter";

export const metadata = {
    title: "Counter Page",
};

export default function CounterPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Counter Page</h1>
            <Counter />
        </div>
    );
}
