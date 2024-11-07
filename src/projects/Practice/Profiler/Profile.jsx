export default function Profile({ profile }) {
    return <li className="p-8">{profile.name.title} {profile.name.first} {profile.name.last}</li>;
}