import {useOutletContext} from "react-router-dom";

interface IFollowersContext {
    nameOfMyUser: string;
}

function Followers() {
    const { nameOfMyUser } = useOutletContext<IFollowersContext>();
    return (
        <div>
            <h1>Here are {nameOfMyUser}'s followers</h1>
        </div>
    )
};

export default Followers;