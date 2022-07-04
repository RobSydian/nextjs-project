import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sagrada_Familia_8-12-21_%281%29.jpg/1280px-Sagrada_Familia_8-12-21_%281%29.jpg",
    address: "C/ Marina, 78910, Barcelona",
    description: "This is a second meetup!",
  },
];

export default function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
