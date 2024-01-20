import { Hangman } from "@repo/ui";
interface IRoom {
  params: {
    roomId: string;
  };
}

const Room = (props: IRoom) => {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      room id:{`${props.params.roomId}`}
      <Hangman />
    </div>
  );
};

export default Room;
