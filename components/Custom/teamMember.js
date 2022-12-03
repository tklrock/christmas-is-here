import { Image } from 'next/image';

export const TeamMember = ({
    name,
    photo,
    role

}) => {
    return (
        <Image
            src={photo}
            alt="profile"
            className="rounded-circle"
            width="200"
            height="200"
        />
    )
}