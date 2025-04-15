'use client'

type Props = {
    population: number;
}

export default function Population({population}: Props) {
    return (
    <div className="border-2 border-white text-white py-1 px-2 rounded-lg
            flex justify-center bg-green-600">
        <span>{population}</span>
    </div>
    );
}