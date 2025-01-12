import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface ICharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: ICharacterComponentProps) => {
    return (
        <div
            className="my-10 border border-gray-300 rounded-2xl grid justify-center items-center cursor-pointer transition-shadow duration-500 hover:shadow-lg">
            <div className="overflow-hidden rounded-t-2xl h-64">
                <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-t-2xl transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-center mb-2">
                    {item.name} {item.surname}
                </h3>
                <p className="text-center max-h-[160px] hover:max-h-full overflow-hidden text-ellipsis transition-all duration-300">{children}</p>
            </div>
        </div>
    );
};