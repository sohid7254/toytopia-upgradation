import React, { useEffect } from "react";
import { useParams } from "react-router";
import useData from "../Hooks/useData";
import ToyDetailsCard from "../Components/ToyDetailsCard/ToyDetailsCard";
import RightAside from "../Layouts/RightAside";

const ToyDetails = () => {
    const { id } = useParams();
    const { data } = useData();

    const toy = data.find((item) => item.toyId === parseInt(id));
    const toyName = toy?.toyName;
    useEffect(() => {
        if (toyName) {
            document.title = `Toy-Topia | ${toyName}`;
        } else {
            document.title = "Toytopia | Toy Details";
        }
    }, [toyName]);

    return (
        <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 py-5 px-4">
            
            <section className="md:col-span-9">
                <h2 className="font-bold text-xl mb-4">Specific Toys Details Here</h2>
                <ToyDetailsCard toy={toy} />
            </section>

            <aside className="md:col-span-3">
                <h2 className="font-bold text-xl mb-4">Subscribe to Our Newsletter</h2>
                <RightAside />
            </aside>
        </main>
    );
};

export default ToyDetails;
