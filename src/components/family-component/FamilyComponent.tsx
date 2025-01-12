import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div className="grid grid-cols-5 gap-5 justify-center items-start mx-5">
            {
                simpsons.map((value, index) => <CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};