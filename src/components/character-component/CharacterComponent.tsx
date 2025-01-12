import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface ICharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: ICharacterComponentProps) => {
    return (
        <div className="my-10 border-2 border-gray-200">
            <h3 className="text-2xl">{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name} />
            <p>{children}</p>
        </div>
    );
};